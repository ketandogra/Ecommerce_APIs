const mongoose = require("mongoose");

// Defining schema
const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

//  MAKING MODEL
const Products = mongoose.model("Products", productSchema);

// exporting MODEL
module.exports = Products;
