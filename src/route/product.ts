import { Router } from 'express';
import { Brand, Product } from '../model/product.js';

export default Router()

.get('/brand/:id', async (req, res, next) => {
    const { id } = req.params;
    const brand = await Brand.findById(id);

    res.json(brand);
})
.get('/brand', async (req, res, next) => {
    const query = req.query.q;
    const brand = await Brand.find({ name: query });

    res.json(brand);
})
.put('/brand/:id', async (req, res, next) => {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    
    if (brand != null) {
        const name = req.body.name;

        brand.name = name;
        await brand.save();

        res.status(204);
    }
    else {
        res.status(400);
    }
})
.post('/brand', async (req, res, next) => {
    try {
        const brand = new Brand(req.body);
        await brand.save();

        res.status(201);
    } 
    catch (error) {
        res.status(400);
    }
})
.delete('/brand/:id', async (req, res, next) => {
    const { id } = req.params;
    const brand = await Brand.findByIdAndDelete(id);

    res.status(204);
})

.get('/product/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = Product.findById(id);
    
    res.json(product);
})
.get('/product', async (req, res, next) => {
    const query = req.query.q;
    const products = Product.find({ name: query });

    res.json(products);
})
.put('/product/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    
    if (product != null) {

        await product.save();

        res.status(204);
    }
    else {
        res.status(400);
    }
})
.post('/product', async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201);
    } 
    catch (error) {
        res.status(400);
    }
})

.delete('/product/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    res.status(204);
})