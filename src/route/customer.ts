import { Router } from 'express';
import { Order } from '../model/order.js';
import { TaskType } from '../model/task.js';
import { Customer } from '../model/test_customer.js';

export default Router()


.get('/history', async (req, res, next) => {
    const orders = await Order.find({ customer: '' });

    if (orders == null) {
        return res.status(404);
    }

    const ordersPop = orders.map(async (order) => {
        if (order.task?.kind == TaskType.Shopping) {
            return await order.populate('store')
        }
        else {
            return order;
        }
    });

    res.json(ordersPop);
})
.get('/cart', async (req, res, next) => {
    const user = await Customer.findById('');

    if (user == null) {
        return res.status(404);
    }
    res.json(user.cart);
})
.post('/cart', async (req, res, next) => {
    const user = await Customer.findById('');

    if (user == null) {
        return res.status(404);
    }
    user.cart.push(req.body);
    user.save();
    res.json(user.cart);
})
