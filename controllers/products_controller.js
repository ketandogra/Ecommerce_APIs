const Products = require("../models/products");

//Get all products
module.exports.getProducts = async function (req, res) {
  try {
    const products = await Products.find(
      {},
      { _id: 0, id: 1, name: 1, quantity: 1 }
    );

    return res.status(200).json({
      data: {
        product: products,
      },
    });
  } catch (err) {
    console.log("Error in fetching all products", err);
    return res.status(500).json({
      message: "Server side error",
    });
  }
};

//Create a product
module.exports.addProduct = async function (req, res) {
  try {
    console.log(req.body);
    const products = await Products.find({});
    const length = products.length;

    await Products.create({
      id: length + 1,
      name: req.body.name,
      quantity: req.body.quantity,
    });

    return res.status(200).json({
      data: {
        product: req.body,
      },
    });
  } catch (err) {
    console.log("Error in creating a product", err);
    return res.status(500).json({
      message: "Server side error",
    });
  }
};

//Delete a product
module.exports.deleteProduct = async function (req, res) {
  try {
    const isDeleted = await Products.findOneAndDelete({
      id: parseInt(req.params.id),
    });
    if (isDeleted) {
      return res.status(200).json({
        data: {
          message: "product deleted",
        },
      });
    } else {
      console.log("Product Not Found!");
      return;
    }
  } catch (err) {
    console.log("Error in deleting a product", err);
    return res.status(500).json({
      message: "Server side error",
    });
  }
};

//update a product
module.exports.updateProduct = async function (req, res) {
  try {
    console.log(typeof req.params.id);
    console.log(req.query.number);
    const product = await Products.find({ id: parseInt(req.params.id) });
    if (product) {
      await Products.findOneAndUpdate(
        { id: parseInt(req.params.id) },
        {
          quantity: product[0].quantity + parseInt(req.query.number),
        }
      );

      const updatedResult = await Products.find(
        { id: req.params.id },
        { _id: 0, id: 1, name: 1, quantity: 1 }
      );
      return res.status(200).json({
        data: {
          product: updatedResult,
        },
      });
    }
    return res.status(204).json();
  } catch (err) {
    console.log(`Error in updating a product: ${err}`);
    return res.status(501).json();
  }
};
