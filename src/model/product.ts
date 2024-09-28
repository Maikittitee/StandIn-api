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
        unique: true, 
        required: true, 
    },
    logo: { 
        type: String,     
    },
});


const variantSchema = new Schema({
    images: [String],
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    option: {

    }
});


const productSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true, 
    },
    category: { 
        type: String, 
        enum: Category,
    },
    variant: [variantSchema],
});


const retailSchema = new Schema({
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    subproduct: [{
        variant: {
            type: Schema.Types.ObjectId,
            ref: 'ProductVariant',
            required: true,
        },
        available: {
            type: Boolean,
            default: true,
            required: true,
        },
    }],
});


export const itemSchema = new Schema({
    product: { 
        type: Schema.Types.ObjectId, 
        ref: 'ProductRetail',
        required: true,
    },
    variant: {
        type: Schema.Types.ObjectId, 
        ref: 'ProductVariant',
        required: true,
    },
    quantity: { 
        type: Number, 
        min: 1,
        required: true,
    },
}, {
    _id: false,
});


// https://www.mongodb.com/community/forums/t/product-with-different-varients-schema/136631
// https://stackoverflow.com/questions/42295107/mongodb-schema-for-ecommerce-products-that-have-variations-with-different-skus
// https://stackoverflow.com/questions/24923469/modeling-product-variants

export const Brand = model('Brand', brandSchema);
export const Product = model('Product', productSchema);
export const ProductVariant = model('ProductVariant', variantSchema);
export const ProductRetail = model('ProductRetail', retailSchema);