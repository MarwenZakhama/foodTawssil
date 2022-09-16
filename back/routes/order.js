const Order = require("../models/Order");
const router = require("express").Router();

// send order
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    var o =  await Order.create({...req.body});
    res.status(200).json(o);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all orders
router.get("/", async (req, res) => {
  try {
    var os =  await Order.find().sort('-createdAt').limit(10);
    res.status(200).json(os);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// filder order by id
router.get("/:id", async (req, res) => {
  try {
    var o =  await Order.findById(req.params.id);
    res.status(200).json(o);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete order
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.body);
    var o =  await Order.findByIdAndRemove(req.params.id);
    res.status(200).json(o);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;