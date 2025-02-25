const fs = require('fs');

class ProductManager {
    constructor(filePath) {
        this.path = filePath;
        if (!fs.existsSync(this.path)) fs.writeFileSync(this.path, JSON.stringify([]));
    }

    async getProducts() {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        return JSON.parse(data);
    }

    async getProductById(id) {
        const products = await this.getProducts();
        return products.find(prod => prod.id === id);
    }

    async addProduct(product) {
        const products = await this.getProducts();
        const newProductId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
        const newProduct = { id: newProductId, ...product };
        products.push(newProduct);
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
        return newProduct;
    }
}

module.exports = ProductManager;
