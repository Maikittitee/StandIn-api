import { Router } from 'express';
import { Order } from '../model/order.js';

export default Router()

.get('/order/:id', async (req, res, next) => {
    const { id } = req.params;
    const order = await Order.findById(id);

    res.json(order);
})
.get('/order', async (req, res, next) => {
    const query = req.query.q;
    const order = await Order.find({ name: query });

    res.json(order);
})
.put('/order/:id', async (req, res, next) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    
    if (order != null) {
        const name = req.body.name;

        await order.save();

        res.status(204);
    }
    else {
        res.status(400);
    }
})
.post('/order', async (req, res, next) => {
    try {
        const order = await Order.create(req.body);

        res.status(201);
    } 
    catch (error) {
        res.status(400);
    }
})
.delete('/order/:id', async (req, res, next) => {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);

    res.status(204);
})
