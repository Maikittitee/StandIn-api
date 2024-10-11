import { Router } from 'express';
import { Order, OrderStatus } from '../model/order.js';
import { TaskType } from '../model/task.js';
import { TrackStatus } from '../model/order.js';

export default Router()


.get('/history', async (req, res, next) => {
    // @ts-expect-error
    const stander_id = res.session.user;
    const orders = await Order.find({ stander: stander_id });

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

.post('/order/:id/taking', async (req, res, next) => {
    const { id } = req.params;
    const action: boolean = req.body.taking;
    // @ts-expect-error
    const stander_id = res.session.user;

    const order = await Order.findById(id);

    if (order == null) {
        return res.status(404);
    }
    else {
        // @ts-expect-error
        if (order.stander != stander_id) {
            return res.status(401);
        }
        if (order.status != OrderStatus.Pending) {
            return res.status(400);
        }
    }

    if (action) {
        order.status = OrderStatus.Accepted;
    }
    else {
        order.status = OrderStatus.Rejected;
    }

    order.save();
    res.json(order.status);
})

.post('/order/:id/tracking', async (req, res, next) => {
    const { id } = req.params;
    const status: TrackStatus = req.body.status;
    // @ts-expect-error
    const stander_id = res.session.user;

    const order = await Order.findById(id);

    if (order == null) {
        return res.status(404);
    }
    else {
        // @ts-expect-error
        if (order.stander != stander_id) {
            return res.status(401);
        }
    }

    order.trackStatus.push({
        datetime: new Date(),
        status: status,
    });
    order.save();
    res.json(order.trackStatus);
})