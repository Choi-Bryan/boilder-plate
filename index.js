const express = require('express')
const app = express()
const port = 5000

const mongodbconnection = "mongodb+srv://onevoice:49894989@react-blog-kjdbi.mongodb.net/test?retryWrites=true&w=majority";

const mongoose = require('mongoose')
mongoose.connect(mongodbconnection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(() => console.log('DB connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

