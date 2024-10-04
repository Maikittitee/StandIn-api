import 'dotenv/config';
import mongoose from 'mongoose';

import { Building, Store } from '../model/address.js';
import { Order, OrderStatus, TrackStatus } from '../model/order.js';
import { Brand, Product, ProductModel } from '../model/product.js';
import { TaskType, PackageSize } from '../model/task.js';


// @ts-expect-error
await mongoose.connect(process.env.ATLAS_URI);


const siam_paragon = new Building({
    name: 'SIAM PARAGON',
    address: {
        country: 'Thailand',
        zipcode: '10330',
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


// Crafter's guitar model
const interesting_guitar = new ProductModel({
    name: 'TMC-035EQ',
    brand: crafter._id,
    category: undefined,
    variant: [
        {
            images: [
                'https://images.squarespace-cdn.com/content/v1/549721b4e4b08be712d559be/1446476048437-8SI3ZPVYISJLFZW4VQ80/TM-1.jpg',
            ],
            price: 19600,
            description: 'One of the best "Orchestra" body type guitars',
            option: undefined,
        },
    ],
});

const guitar_variant = interesting_guitar.variant[0];

// guitar selling at store
const good_guitar = new Product({
    store: music_collection._id,
    model: interesting_guitar._id,
    subproduct: [{
        variant: guitar_variant._id,
        available: true,
    }],
});

const guitar_order = new Order({
    task: {
        kind: TaskType.Shopping,
        store: music_collection._id,
        items: [{
            product: good_guitar._id,
            variant: guitar_variant._id,
            quantity: 1,
        }],
    },
    orderStatus: OrderStatus.Paid,
    trackStatus: [
        {
            datetime: Date.now(),
            status: TrackStatus.On_the_way
        }, {
            datetime: Date.now(),
            status: TrackStatus.Arrived_at_store
        }, {
            datetime: Date.now(),
            status: TrackStatus.Item_recieved
        },
    ],
    review: {
        rating: 4,
        comment: 'some comment',
    },
    // stander: '',
    // customer: '',
});

const queue_order = new Order({
    task: {
        kind: TaskType.Queueing,
        location: {
            country: 'Thailand',
            zipcode: '10330',
            province: 'Bangkok',
            district: 'Pathum Wan',
            subdistrict: 'Pathum Wan',
            detail: 'some where',
        },
        datetime: Date.now(),
        size: PackageSize.Small,
        detail: 'some description',
    },
    orderStatus: OrderStatus.Pending,
    // review: undefined,
    // trackStatus: [],
    // stander: '',
    // customer: '',
});

console.log(await siam_paragon.save());
console.log(await music_collection.save());
console.log(await crafter.save());
console.log(await interesting_guitar.save());
console.log(await good_guitar.save());
console.log(await guitar_order.save());
console.log(await queue_order.save());