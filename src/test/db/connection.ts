import 'dotenv/config';
import mongoose from 'mongoose';
import assert from 'assert';


assert(process.env.ATLAS_URI);
await mongoose.connect(process.env.ATLAS_URI);
