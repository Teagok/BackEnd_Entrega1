const express = require('express');
const productRouter = require('./routes/product.router');
const cartRouter = require('./routes/cart.router');

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

app.get('/', (req, res) => {
    res.send(`
        <h1>Ecommerce</h1>
        <p>Bienvenido a la API de Ecommerce. Aquí tenes las rutas disponibles:</p>
        <ul>
            <li><b>/api/products</b> - Obtener productos (GET)</li>
            <li><b>/api/products/:pid</b> - Obtener producto por ID (GET)</li>
            <li><b>/api/products</b> - Crear un nuevo producto (POST)</li>
            <li><b>/api/carts</b> - Obtener carritos (GET)</li>
            <li><b>/api/carts/:cid</b> - Obtener carrito por ID (GET)</li>
            <li><b>/api/carts</b> - Crear un nuevo carrito (POST)</li>
        </ul>
    `);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor andando en el puerto ${PORT}`);
});
