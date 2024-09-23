require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const users = require('./routes/users')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI)
		.then(() => console.log("Mongo connected"))
		.catch((error) => console.error(error))


app.use('/users', users)

app.get('/', (req, res) => {
  res.send('Hello, Stand In!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})