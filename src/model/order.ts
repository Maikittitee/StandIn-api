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
}, {
    _id: false,
    timestamps: true,
});


const orderSchema = new Schema({
    task: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: true,
    },
    orderStatus: {
        type: Number,
        enum: OrderStatus,
        default: OrderStatus.Pending,
        required: true,
    },
    trackStatus: [{
        datetime: {
            type: Date,
            required: true,
        },
        status: {
            type: Number,
            enum: TrackStatus,
            required: true,
        },
    }],
    review: reviewSchema,
    // customer: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Customer',
    //     required: true,
    // },
    // stander: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Stander',
    //     required: true,
    // },
}, {
    timestamps: true,
});


// https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design
// https://www.mongodb.com/docs/manual/applications/data-models-relationships/
// https://stackoverflow.com/questions/46406380/is-two-way-referencing-more-efficient-in-mongo-for-a-1-to-n-relationship

export const Order = model('Order', orderSchema);