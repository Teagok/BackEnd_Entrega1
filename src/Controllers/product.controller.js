const ProductManager = require('../managers/ProductManager');
const productManager = new ProductManager('./data/products.json');

const getProducts = async (req, res) => {
    const products = await productManager.getProducts();
    res.json(products);
};

const getProductById = async (req, res) => {
    const product = await productManager.getProductById(parseInt(req.params.pid));
    product ? res.json(product) : res.status(404).json({ message: 'Producto no encontrado' });
};

const createProduct = async (req, res) => {
    const newProduct = await productManager.addProduct(req.body);
    res.status(201).json(newProduct);
};

module.exports = {
    getProducts,
    getProductById,
    createProduct
};
