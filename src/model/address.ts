import { Schema, model } from 'mongoose';


export const addressSchema = new Schema({
    country: { 
        type: String, 
        default: 'Thailand',
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


export const storeSchema = new Schema({
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

// https://en.wikipedia.org/wiki/Thai_addressing_system
export const Store = model('Store', storeSchema);
export const Building = model('Building', buildingSchema);
export default Building;