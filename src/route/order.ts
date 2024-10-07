import { Router } from 'express';
import { Order } from '../model/order.js';
import { TaskType, PackageSize, isShopping, isQueueing } from '../model/task.js';

export default Router()


.get('/order/:id', async (req, res, next) => {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (order == null) {
        res.status(400);
    }
    else {
        res.json(order);
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
.put('/order/:id', async (req, res, next) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    
    if (order == null) {
        res.status(400);
    }
    else {
        const name = req.body.name;

        order
        await order.save();
    
        res.status(204);
    }
})
.patch('/order/:id', async (req, res, next) => {
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
.delete('/order/:id', async (req, res, next) => {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);

    res.status(204);
})