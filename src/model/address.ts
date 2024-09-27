import { Schema, model } from 'mongoose';


// https://en.wikipedia.org/wiki/Thai_addressing_system
export const addressSchema = new Schema({
    country: { 
        type: String, 
        default: 'Thailand',
        required: true,
    },
    postalcode: {
        type: String,
        required: true,
    },
    province: { 
        type: String, 
        required: true,
    },
    district: { 
        type: String, 
        required: true,
    },
    subdistrict: { 
        type: String, 
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
}, { 
    _id: false 
});


const buildingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: addressSchema,
        required: true,
    },
});


const storeSchema = new Schema({
    name: { 
        type: String, 
        required: true,
    },
    building: {
        type: Schema.Types.ObjectId,
        ref: 'Building',
        required: true,
    },
});


export const Store = model('Store', storeSchema);
export const Building = model('Building', buildingSchema);