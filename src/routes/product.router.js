const { Router } = require('express');
const { getProducts, getProductById, createProduct } = require('../Controllers/product.controller');

const router = Router();

router.get('/', getProducts);
router.get('/:pid', getProductById);
router.post('/', createProduct);

module.exports = router;
