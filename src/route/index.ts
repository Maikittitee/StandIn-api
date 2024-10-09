import { Router } from 'express';
import product from './crud/product.js';
import order from './crud/order.js';
import address from './crud/address.js';
import account from './customer.js';
import customer from './customer.js';
import stander from './stander.js';
import browse from './browse.js';
import commerce from './order.js';


export default Router()
    .use('/product', product)
    .use('/address', address)
    .use('/order', order)
    .use('/account', account)
    .use('/customer', customer)
    .use('/stander', stander)
    .use('/browse', browse)
    .use('/commerce', commerce)