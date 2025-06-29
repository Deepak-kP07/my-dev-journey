const express = require('express');
const path = require('path');
const productController = require('../contorllers/product');

const router = express.Router();

router.get('/', productController.getProducts);

// router.get('/products',);
router.get('/cart',productController.cart);
router.get('/checkout',productController.checkout);

module.exports = router;