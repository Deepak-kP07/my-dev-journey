const express = require("express");
const path = require("path");

const router = express.Router();
const productController = require("../contorllers/product")


// GET /admin/add-product - Serve the form
router.get("/add-product",productController.serveForm); 

// POST /admin/add-product - Handle form submission
router.post("/add-product",productController.addProduct);

//edit product 
router.get("/edit-products",productController.getProducts);


exports.routes = router;

