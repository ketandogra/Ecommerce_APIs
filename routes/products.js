const express = require("express");
const router = express.Router();

// initializing products controller
const productController = require("../controllers/products_controller");

// to get all products
router.get("/", productController.getProducts);

// to create new product
router.post("/create", productController.addProduct);

// to delete the existing product using it's ID
router.delete("/:id", productController.deleteProduct);

// to update the quanty of a product
router.patch("/:id/update_quantity/", productController.updateProduct);

module.exports = router;
