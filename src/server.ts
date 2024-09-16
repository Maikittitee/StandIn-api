import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import assert from 'node:assert';
import router from './route';


dotenv.config();

const PORT = process.env.PORT || 8080;
const uri = process.env.ATLAS_URI;

assert(uri, "ATLAS_URI is required");


const app = express()
    .use(cors())
    .use(express.json())
    .use(router);

mongoose.connect(uri);
app.listen(PORT);