const express = require('express')
const bodyParser = require('body-parser')
const database = require('./services/todoDatabase')
const router = require('./routes/todoRouter')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", 'ejs')
app.use('/', router)

// connecting to the database
database.connect()


app.listen(5000, function() {
    console.log("Working in 5000")
})