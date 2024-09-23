import { Schema, model } from 'mongoose';


const Category = [
    'Clothing',
    'Beauty',
    'Electronics',
    'Home',
    'Stationery',
    'Toys & Games',
];


const brandSchema = new Schema({
    name: { 
        type: String, 
        required: true,
    },
    logo: { 
        type: String,     
    },
});


const subproductSchema = new Schema({
    images: [String],
    available: {
        type: Boolean,
        required: true,
    },
    size: { 
        type: String, 
    },
    color: { 
        type: String, 
    },
});


export const productSchema = new Schema({
    name: { 
        type: String, 
        required: true,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store',
    },
    category: { 
        type: String, 
        enum: Category,
    },
    subproduct: {
        type: [subproductSchema],
    },
    price: {
        type: Number,
        required: true,
    },
});


export const Brand = model('Brand', brandSchema);
export const Product = model('Product', productSchema);
export default Product;