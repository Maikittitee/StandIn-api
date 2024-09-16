import { Schema, model } from 'mongoose';
import { Image, IImage } from './index';

export interface IUser {
  name: string;
  email: string;
  password: string;
  image?: string;
  address?: string;
  card?: string;
}

export const userSchema = new Schema<IUser>({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: Image
  },
  address: {
    type: String
  }
});

export default model<IUser>('User', userSchema);