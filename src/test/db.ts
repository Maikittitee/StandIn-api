import 'dotenv/config';
import mongoose from 'mongoose';

import { Building, Store } from 'model/address.js';
import Order, { OrderStatus, TrackStatus, TaskType } from 'model/order.js';
import { Product, Brand } from 'model/product.js';
import QueueTask, { PackageSize } from 'model/queueing.js';
import ShoppingTask from 'model/shopping.js';

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
    category: undefined,
    subproduct: [{
        available: true,
        image: [
            'https://images.squarespace-cdn.com/content/v1/549721b4e4b08be712d559be/1446476048437-8SI3ZPVYISJLFZW4VQ80/TM-1.jpg',
        ],
    }],
    price: 19600,
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
    trackStatus: TrackStatus.In_transit,
    // stander: '',
    review: {
        rating: 4,
        comment: 'comment',
    },
});

const queue_task = new QueueTask({
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
    trackStatus: undefined,
    // stander: '',
    review: undefined,
});


siam_paragon.save();
music_collection.save();
crafter.save();
best_guitar.save();
guitar_task.save();
guitar_order.save();

queue_task.save();
queue_order.save();