const express = require('express')  // get Express module
const app = express()
const port = 5000                   // let port 5000 be back server

const config = require('./config/key')

const { User } = require('./models/User')

// application/x-www-form-unlencoded
app.use(express.urlencoded({extended: true}))

// application/json
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))


app.get('/', (req, res) => res.send('Hello World!')) // Print message on Root directory



app.post('/register', (req, res) => {
    // get sign in data's from client
    // save in database

    const user = new User(req.body)

    // save: mongoDB method
    user.save((err, userInfo) => {
        if(err) return res.json({sucess: false, err})
        return res.status(200).json({
            success: true
        })
    })

})

// execute on port 5000 if app heard from port, them print log to console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

