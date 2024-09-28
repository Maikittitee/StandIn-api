import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import assert from 'node:assert';
import router from './route/index.js';


const uri = process.env.ATLAS_URI;
const PORT = process.env.PORT;

assert(uri);
assert(PORT);


await mongoose.connect(uri);

const app = express()
    .use(cors())
    .use(express.json())
    .use(router)
    .listen(PORT);