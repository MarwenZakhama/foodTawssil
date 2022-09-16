const router = require("express").Router();


  router.get("/", async (req, res) => {
   
      res.status(200).send("marwen");
    
  });
  
  
  
  
  module.exports = router;