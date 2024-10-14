import { Router } from 'express';
import product from './crud/product.js';
import order from './crud/order.js';
import address from './crud/address.js';
import customer from './customer.js';
import stander from './stander.js';
import browse from './browse.js';


export default Router()
    .use('/', product)
    .use('/', address)
    .use('/', order)
    .use('/customer', customer)
    .use('/stander', stander)
    .use('/browse', browse)