const fs = require('fs');

class CartManager {
    constructor(filePath) {
        this.path = filePath;
        if (!fs.existsSync(this.path)) fs.writeFileSync(this.path, JSON.stringify([]));
    }

    async getCarts() {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        return JSON.parse(data);
    }

    async getCartById(id) {
        const carts = await this.getCarts();
        return carts.find(cart => cart.id === id);
    }

    async createCart() {
        const carts = await this.getCarts();
        const newCartId = carts.length ? Math.max(...carts.map(c => c.id)) + 1 : 1;
        const newCart = { id: newCartId, products: [] };
        carts.push(newCart);
        await fs.promises.writeFile(this.path, JSON.stringify(carts, null, 2));
        return newCart;
    }
}

module.exports = CartManager;
