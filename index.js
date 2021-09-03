const express = require('express')  // get Express module
const app = express()
const port = 5000                   // let port 5000 be back server

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://heemin:k30930260!@boilerplate.xksmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => res.send('Hello World!')) // Print message on Root directory

// execute on port 5000 if app heard from port, them print log to console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

