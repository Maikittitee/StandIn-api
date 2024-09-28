import { Router } from 'express';
import product from './product.js';
import order from './order.js';
import address from './address.js';
// import user from './user';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

export default router
    .use('/product', product)
    .use('/address', address)
    .use('/order', order)
    // .use('/user', user)