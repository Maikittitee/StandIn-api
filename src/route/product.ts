import { Router } from 'express';
import { Brand, Product, ProductModel } from '../model/product.js';

export default Router()


.get('/brand', async (req, res, next) => {
    const { q } = req.query;
    const brands = await Brand.find({ name: q });

    res.json(brands);
})
.post('/brand', async (req, res, next) => {
    try {
        const brand = await Brand.create(req.body);

        res.status(201);
    } 
    catch (error) {
        res.status(400);
    }
})
.put('/brand/:id', async (req, res, next) => {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    
    if (brand == null) {
        res.status(400);
    }
    else {
        const { name, logo } = req.body;

        if (name) {
            brand.name = name;
        }
        if (logo) {
            brand.logo = logo;
        }
        await brand.save();
    
        res.status(204);
    }
})
.delete('/brand/:id', async (req, res, next) => {
    const { id } = req.params;
    const brand = await Brand.findByIdAndDelete(id);

    res.status(204);
})


.get('/model', async (req, res, next) => {
    const { q } = req.query;
    const models = await ProductModel.find({ name: q });

    res.json(models);
})
.post('/model', async (req, res, next) => {
    try {
        const model = await ProductModel.create(req.body);
        res.status(201);
    } 
    catch (error) {
        res.status(400);
    }
})
.put('/model/:id', async (req, res, next) => {
    const { id } = req.params;
    const model = await ProductModel.findById(id);
    
    if (model == null) {
        res.status(400);
    }
    else {
        
        await model.save();
    
        res.status(204);
    }
})
.delete('/model/:id', async (req, res, next) => {
    const { id } = req.params;
    const model = await ProductModel.findByIdAndDelete(id);

    res.status(204);
})


.get('/product', async (req, res, next) => {
    const { q } = req.query;
    //const products = await Product.find({ name: q });

    res.json(products);
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
.put('/product/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    
    if (product == null) {
        res.status(400);
    }
    else {
        await product.save();
    
        res.status(204);
    }
})
.delete('/product/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    res.status(204);
})