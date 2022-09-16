const User = require("../models/User");
const router = require("express").Router();
bcrypt = require('bcryptjs');

//GET USER

router.get("/find/:id", async (req, res) => {
    try {
        console.log(req.params.id);
      const user = await User.findById(req.params.id);
      if(user.password === req.body.password){
        const { password, ...others } = user._doc;
        res.status(200).json(others);

      }else{
        res.status(500).json({err:"not found"});
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


// login
  router.post("/login", async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findOne({email:req.body.email});
        const verifyPassword = await bcrypt.compare( req.body.password,user.password )
        if(verifyPassword){
          const { password, ...others } = user._doc;
          res.status(200).json(others);
  
        }else{
          res.status(500).json({err:"not found"});
        }

    } catch (err) {
      res.status(500).json(err);
    }
  });
// register
  router.post("/register", async (req, res) => {
    try {
      console.log(req.body);
      if(req.body.password === req.body.confirmPassword) 
      {
        var salt = bcrypt.genSaltSync(10);
        var hash = await bcrypt.hashSync(req.body.password, salt);
        const newUser = await User.create({email:req.body.email, username:req.body.username, password:hash,number:req.body.phone })
        res.status(200).json(newUser)
      }else{res.status(200).json(newUser)}
      
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // update user profile
  router.put("/update", async (req, res) => {
    try {
        console.log(req.body);
        var us = {...req.body}
        if(req.body.oldPassword && us.newPassword && us.confirmPassword ){
          if(!(us.newPassword === us.confirmPassword)) return res.status(500).json(err);
          const olduser = await User.findById(req.body.id);
          const verifyPassword = await bcrypt.compare( req.body.oldPassword,olduser.password )
          if(!verifyPassword) return res.status(500).json(err);
          var salt = bcrypt.genSaltSync(10);
          var hash = await bcrypt.hashSync(us.confirmPassword, salt);
          us.password = hash
          delete us.oldPassword
          delete us.confirmPassword
          delete us.newPassword
        }
        console.log(req.body.id);
        const user = await User.findByIdAndUpdate(req.body.id,
          {
            $set: us,
          },
          { new: true }
        );

      
        const { password, ...others } = user._doc;
        res.status(200).json(others);

    } catch (err) {
      res.status(500).json(err);
    }
  });



// get all users
  router.get("/", async (req, res) => {
    try {
      var users =  await User.find().sort('-createdAt');
      res.status(200).json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // delete users
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.body);
    var o =  await User.findByIdAndRemove(req.params.id);
    res.status(200).json(o);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;