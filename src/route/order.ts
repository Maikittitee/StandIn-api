import { Router } from 'express';
import { Order } from '../model/order.js';

export default Router()


.get('/purchase', async (req, res, next) => {
    const orders = await Order.find({ customer: '' });

    res.json(orders);
})
.post('/review', async (req, res, next) => {
    const order_id = req.query.order;
    const order = await Order.findById(order_id);

    if (order == null) {
        return res.status(404);
    }
    order.review = req.body;
    order.save();
    res.json(order.review);
})