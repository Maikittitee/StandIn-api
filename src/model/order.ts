import { Schema, model } from 'mongoose';
import product, { IProduct } from './product';

export interface ITask {
    product: IProduct;
    amount: number;
}
export const TaskSchema = new Schema<ITask>({
    product: { 
        type: product, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
});
export const Task = model<ITask>('Task', TaskSchema);


export interface IOrder {
    name: string;
    image: string;
    price: number;
}
export const orderSchema = new Schema<IOrder>({
    name: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    price: {
        type: Number,
        required: true
    }
});

export default model<IOrder>('Order', orderSchema);
