import 'dotenv/config';
import mongoose from 'mongoose';

import { Building, Store } from '../model/address.js';
import { Order, OrderStatus } from '../model/order.js';
import { TrackStatus, TaskType } from '../model/commission.js';
import { Product, Brand } from '../model/product.js';
import { QueueingTask, PackageSize } from '../model/queueing.js';
import { ShoppingTask } from '../model/shopping.js';

// @ts-expect-error
mongoose.connect(process.env.ATLAS_URI);


const siam_paragon = new Building({
    name: 'SIAM PARAGON',
    address: {
        country: 'Thailand',
        postalcode: '10330',
        province: 'Bangkok',
        district: 'Pathum Wan',
        subdistrict: 'Pathum Wan',
        detail: '991 Rama I Rd',
    },
});

const music_collection = new Store({
    name: 'music collection',
    building: siam_paragon._id,
});

const crafter = new Brand({
    name: 'Crafter',
    logo: 'http://www.crafterguitars.com/eng/images/common/h_logo.png',
});

const best_guitar = new Product({
    name: 'TMC-035EQ',
    brand: crafter._id,
    store: music_collection._id,
    // category: undefined,
    subproduct: [{
        price: 19600,
        available: true,
        image: [
            'https://images.squarespace-cdn.com/content/v1/549721b4e4b08be712d559be/1446476048437-8SI3ZPVYISJLFZW4VQ80/TM-1.jpg',
        ],
    }],
});

const guitar_task = new ShoppingTask({
    store: music_collection._id,
    items: [{
        product: best_guitar._id,
        subproduct: 0,
        quantity: 1,
    }],
});

const guitar_order = new Order({
    task: {
        type: TaskType.Shopping,
        value: guitar_task._id,
    },
    orderStatus: OrderStatus.Paid,
    trackStatus: [
        {
            dateTime: Date.now(),
            status: TrackStatus.On_the_way
        },
        {
            dateTime: Date.now(),
            status: TrackStatus.Arrived_at_store
        },
        {
            dateTime: Date.now(),
            status: TrackStatus.Item_recieved
        },
    ],
    // stander: '',
    review: {
        rating: 4,
        comment: 'comment',
    },
});

const queue_task = new QueueingTask({
    location: 'some location',
    datetime: Date.now(),
    size: PackageSize.Small,
    detail: 'description',
});

const queue_order = new Order({
    task: {
        type: TaskType.Queueing,
        value: queue_task._id,
    },
    orderStatus: OrderStatus.Pending,
    // trackStatus: undefined,
    // stander: '',
    // review: undefined,
});

console.log('save');

siam_paragon.save();
console.log('save1');

music_collection.save();
console.log('save2');

crafter.save();
console.log('save3');

best_guitar.save();
console.log('save4');

guitar_task.save();
console.log('save5');

guitar_order.save();
console.log('save6');

queue_task.save();
console.log('save7');

queue_order.save();
console.log('save8');
