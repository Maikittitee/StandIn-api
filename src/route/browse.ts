import { Router } from 'express';
import { Order } from '../model/order.js';
import { Stander } from '../model/test_stander.js';
import { Product } from '../model/product.js';

export default Router()


.get('/product', async (req, res, next) => {
    const products = await Product.find();

    res.json(products);
})
.get('/stander', async (req, res, next) => {
    const standers = await Stander.find();

    res.json(standers);
})
.get('/stander/:id', async (req, res, next) => {
    const { id } = req.params;
    const stander = await Stander.findById(id);

    if (stander == null) {
        return res.status(404);
    }

    res.json(stander);
})
