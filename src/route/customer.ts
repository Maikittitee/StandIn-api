import { Router } from 'express';
import { Order, OrderStatus } from '../model/order.js';
import { TaskType } from '../model/task.js';
// import { Customer } from '../model/test_customer.js';

export default Router()


.get('/history', async (req, res, next) => {
    // @ts-expect-error
    const user_id = res.session.user;
    const orders = await Order.find({ customer: user_id });

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

// .get('/cart', async (req, res, next) => {
//     // @ts-expect-error
//     const user_id = res.session.user;
//     const customer = await Customer.findById(user_id);

//     if (customer == null) {
//         res.status(404);
//         return;
//     }
//     // @ts-expect-error
//     customer.cart.find({})?.populate('product');
//     const cartPop = customer.cart.map(async (item) => {
//         await item.populate('product')
//         return;
//     });

//     res.json(cartPop);
// })

// .post('/cart', async (req, res, next) => {
//     // @ts-expect-error
//     const customer_id = res.session.user;
//     const customer = await Customer.findById(customer_id);

//     if (customer == null) {
//         res.status(404);
//         return;
//     }
//     customer.cart.push(req.body);
//     customer.save();
//     res.json(customer.cart);
// })

.post('/review', async (req, res, next) => {
    // @ts-expect-error
    const customer_id = res.session.user;
    const order_id = req.query.order;

    const order = await Order.findById(order_id);

    if (order == null) {
        res.status(404);
        return;
    }
    order.review = req.body;
    order.save();
    res.json(order.review);
})

.get('/order/:id/pay', async (req, res, next) => {
    //const order_id = req.query.order;
    const { id } = req.params;
    // @ts-expect-error
    const customer_id = res.session.user;
    const order = await Order.findById(id);

    if (order == null) {
        res.status(404);
        return;
    }

    order.status = OrderStatus.Paid;
    order.save();
    res.json(order.status);
})