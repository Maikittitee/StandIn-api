import { Schema, model } from 'mongoose';


export enum Role {
    Admin,
    Customer,
    Stander,
}

export const userSchema = new Schema({
    username: { 
        type: String, 
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: Number,
        required: true,
        enum: Role,
    },
});


export default model('User', userSchema);