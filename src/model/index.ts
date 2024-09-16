import { Schema, model } from 'mongoose';

export interface IImage {
  src: string;
  alt: string;
}
export const imageSchema = new Schema<IImage>({
  src: { 
    type: String, 
    required: true 
  },
  alt: { 
    type: String, 
    required: true 
  },
});
export const Image = model<IImage>('Image', imageSchema);

