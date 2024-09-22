import { Schema, model } from 'mongoose';


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
        required: true,
    },
    detail: { 
        type: String, 
        required: true,
    },
});


export const QueueTask = model('QueueTask', queueTaskSchema);
export default QueueTask