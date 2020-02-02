const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
mongoose.connect('mongodb+srv://Roosevelt:llruy007@cluster0-ftuhn.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)


app.listen(3333)