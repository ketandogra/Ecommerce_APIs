const express = require("express");
const port = 8000;
const app = express();
const db = require("./config/mongoose");

// middleware for parse data from request body
app.use(express.urlencoded({ extended: true }));

app.use("/products", require("./routes/products"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error:", err);
    return;
  }

  console.log("Server is up and running on port:", port);
});
