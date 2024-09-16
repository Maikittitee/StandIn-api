import { Schema, model } from 'mongoose';
import { Image, IImage } from './index';

export interface IProduct {
  name: string;
  image: string;
  price: number;
}

export const productSchema = new Schema<IProduct>({
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

export default model<IProduct>('Product', productSchema);