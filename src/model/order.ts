import { Schema, model } from 'mongoose';


export enum OrderStatus {
    Pending,
    Cancelled,
    Accepted,
    Rejected,
    Paid,
    Completed,
}
export enum TrackStatus {
    On_the_way,
    Arrived_at_store,
    Item_recieved,
    Package_sent,
    In_transit,
}
export enum TaskType {
    Queueing,
    Shopping,
}


const reviewSchema = new Schema({
    rating: { 
        type: Number, 
        min: 1,
        max: 5,
        required: true,
    },
    comment: {
        type: String,
    },
    datetime: { 
        type: Date, 
        default: Date.now,
    },
});


const orderSchema = new Schema({
    task: {
        type: {
            type: Number,
            enum: TaskType,
            required: true,
        },
        value: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    },
    orderStatus: {
        type: Number,
        enum: OrderStatus,
        default: OrderStatus.Pending,
    },
    trackStatus: [{
        datetime: Date,
        status: {
            type: Number,
            enum: TrackStatus,
        },
    }],
    // stander: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Stander',
    // },
    // customer: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Customer',
    //     required: true,
    // },
    review: reviewSchema,
});


export const Order = model('Order', orderSchema);
export default Order;