const CartManager = require('../managers/CartManager');
const cartManager = new CartManager('./data/carts.json');

const getCarts = async (req, res) => {
    const carts = await cartManager.getCarts();
    res.json(carts);
};

const getCartById = async (req, res) => {
    const cart = await cartManager.getCartById(parseInt(req.params.cid));
    cart ? res.json(cart) : res.status(404).json({ message: 'Carrito no encontrado' });
};

const createCart = async (req, res) => {
    const newCart = await cartManager.createCart();
    res.status(201).json(newCart);
};

module.exports = {
    getCarts,
    getCartById,
    createCart
};
