require("dotenv").config();
let mongoose = require("mongoose");
const bodyParser = require('body-parser')

var cors = require('cors')
const User = require("./models/User");

//return the addition for two integers


const express = require("express");
const app = express();
app.use(cors())



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
const userRoute = require("./routes/user");
app.use("/api/v1/user",userRoute)

const orderRoute = require("./routes/order");
app.use("/api/v1/order",orderRoute)

const foodRoute = require("./routes/food");
app.use("/api/v1/food",foodRoute)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
    // var u = new User({
    //     username:"marwen",
    //     email:"marwen@gmail.com",
    //     password:"marwen123"
    // })
    // u.save()
  })
  .catch((err) => {
    console.error("Database connection error");
  });

  
  // parse application/x-www-form-urlencoded



  app.listen(process.env.PORT || 5000, function () {
    console.log("server Started !!");
  });