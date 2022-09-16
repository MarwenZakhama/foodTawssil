const Food = require("../models/Food");
const router = require("express").Router();

//GET ALL Food
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/find/:id", async (req, res) => {
  try {
    const foods = await Food.findById(req.params.id);
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json(err);
  }
});
// add food
router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    var o =  await Food.create({...req.body,size:[req.body.size],sup:[req.body.sup]});
    res.status(200).json(o);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    // console.log(req.body);

    var o =  await Food.findByIdAndUpdate(req.params.id,
      {
        $set: {...req.body,size:[req.body.size],sup:[req.body.sup]},
      },
      { new: true }
    );
    res.status(200).json(o);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//delete food
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.body);
    var o =  await Food.findByIdAndRemove(req.params.id);
    res.status(200).json(o);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;