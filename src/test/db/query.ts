import './db.js';
import assert from 'assert';
// import * as doc from './model.js';

import { Building, Store } from '../../model/address.js';
import { Order, OrderStatus, TrackStatus } from '../../model/order.js';
import { Brand, Product, ProductModel } from '../../model/product.js';
import { TaskType, PackageSize } from '../../model/task.js';



const building1 = await Building.findOne({ name: 'SIAM PARAGON' });
const store1 = await Store.findOne({ name: 'music collection' });

console.log(building1);
console.log(store1);
assert(store1?.building?._id.equals(building1?._id));

console.log(await store1?.populate('building'));



const brand1 = await Brand.findOne({ name: 'Crafter' });
const productModel1 = await ProductModel.findOne({ name: 'TMC-035EQ' });

console.log(brand1);
console.log(productModel1);
assert(brand1?._id.equals(productModel1?.brand._id));

console.log(await productModel1?.populate('brand'));



const product1 = await Product.findOne({ model: productModel1?.id });
console.log(product1);

const product2 = await product1?.populate('model');
console.log(product2);

const product3 = await product2?.populate('store');
console.log(product3);

// const product4 = await product3?.populate('subproduct');
// console.log(product4);  



const order = await Order.find();
console.log(order[0]);
console.log(order[1]);