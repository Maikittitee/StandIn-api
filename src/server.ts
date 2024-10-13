// import 'dotenv/config';
import express from 'express';
import dotenv from 'dotenv'

import mongoose from 'mongoose';
import cors from 'cors';
import assert from 'assert';
import router from './route/index.js';


const uri: string = process.env.ATLAS_URI || "";
const PORT = process.env.PORT;

assert(uri && PORT);


await mongoose.connect(uri);

express()
    .use(cors())
    .use(express.json())
    .use(router)
    .listen(PORT);