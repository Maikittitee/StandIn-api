import { Schema, Types, Document } from 'mongoose';
import { itemSchema, IItem } from './product.js';
import { addressSchema, IAddress } from './address.js';


export enum TaskType {
    Queueing = 'Queueing',
    Shopping = 'Shopping',
}
export enum PackageSize {
    Small,
    Medium,
    Laege,
}


interface ITask extends Document {
    taskType: TaskType;
}
export const taskSchema = new Schema<ITask>({
    taskType: { 
        type: String, 
        enum: TaskType, 
        required: true,
    },
}, { 
    discriminatorKey: 'taskType', 
    _id: false,
});


interface IQueueing extends ITask {
    location: IAddress;
    datetime: Date;
    size: Number;
    detail: String;
}
export const queueingSchema = new Schema<IQueueing>({
    location: {
        type: addressSchema,
        required: true,
    },
    datetime: { 
        type: Date, 
        required: true,
    },
    size: { 
        type: Number, 
        enum: PackageSize,
        required: true,
    },
    detail: { 
        type: String, 
        required: true,
    },
}, {
    _id: false,
});


interface IShopping extends ITask {
    store: Types.ObjectId;
    items: IItem[];
}
export const shoppingSchema = new Schema<IShopping>({
    store: { 
        type: Schema.Types.ObjectId, 
        ref: 'Store',
        required: true,
    },
    items: [itemSchema],
}, {
    _id: false,
});


// https://mongoosejs.com/docs/discriminators.html