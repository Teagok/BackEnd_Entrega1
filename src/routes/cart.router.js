const { Router } = require('express');
const { getCarts, getCartById, createCart } = require('../controllers/cart.controller');

const router = Router();

router.get('/', getCarts);
router.get('/:cid', getCartById);
router.post('/', createCart);

module.exports = router;
