// import 'dotenv/config';
import express from 'express';
import dotenv from 'dotenv'

import mongoose from 'mongoose';
// import router from './route/index.js';
import users from './route/users';
import auth from './route/auth';
dotenv.config();

const uri: string = process.env.ATLAS_URI || "";
const PORT = process.env.PORT;



mongoose.Promise = global.Promise;
mongoose.connect(uri)
    .then(() => console.log("Mongo connected"))
    .catch((error) => console.error("Mongo connection error:", error));


const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(router);
app.use('/users', users);
app.use('/auth', auth);

app.get('/', (req, res) => {
    res.send('Hello, Stand In!');
});

app.listen(3000, () => {
    console.log(`Server is listening on port ${3000}`);
});

// console.log("hello ts");