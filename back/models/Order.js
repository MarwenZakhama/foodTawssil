const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String },
    number: { type: String},
    totals:{type:Number},
    userid:{ type: String},
    foods:{ type: Object},
    delivered:{ type: Boolean,default:false},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);