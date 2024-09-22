import { Schema, model } from 'mongoose';


export const addressSchema = new Schema({
    country: { 
        type: String, 
    },
    postalcode: {
        type: String,
    },
    province: { 
        type: String, 
        required: true,
    },
    district: { 
        type: String, 
    },
    subdistrict: { 
        type: String, 
    },
    detail: {
        type: String,
        required: true,
    },
});

// https://en.wikipedia.org/wiki/Thai_addressing_system
export default model('Address', addressSchema);