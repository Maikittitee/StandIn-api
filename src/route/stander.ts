import { Router } from 'express';
import { Order, OrderStatus } from '../model/order.js';

export default Router()


.get('/history', async (req, res, next) => {
    const orders = await Order.findById({ stander: '' });

    res.json(orders);
})
.post('/accept', async (req, res, next) => {
    const order = await Order.findById({ stander: '' });

    if (order == null) {
        return res.status(404);
    }

    order.status = OrderStatus;
    order.save();
    res.json(orders);
})
.post('/reject', async (req, res, next) => {
    const order = await Order.findById({ stander: '' });

    if (order == null) {
        return res.status(404);
    }

    order.status = OrderStatus;
    order.save();
    res.json(orders);
})