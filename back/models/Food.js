const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price:{type: Number,required:true},
    img: { type: String },
    sup:[
        {
           
        }
    ],
    category:{ type: String },
    size:[
      {
          
      }
  ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", FoodSchema);