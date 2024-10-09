import { Schema, model } from 'mongoose';


export enum PackageSize {
    Small,
    Medium,
    Laege,
}


export const queueTaskSchema = new Schema({
    location: { 
        type: String, 
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
});


export const QueueTask = model('QueueTask', queueTaskSchema);
export default QueueTask