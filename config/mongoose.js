const mongoose = require("mongoose");

// making connection to mongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/Products");

//  setting it to db
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
