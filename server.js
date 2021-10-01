if(process.env.NODE_ENV !== 'production') { // only load if in dev environment
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index') // path to index file to reference

// set view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') // set where views are coming from
app.set('layout', 'layouts/layout') // layout file is what every file is put into, holds beginning and ending HTML (header and footer)
app.use(expressLayouts) // tell express to use expressLayouts
app.use(express.static('public')) // tell express where public files are

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true })
const db = mongoose.connection // log if connected to database or not
db.on('error', error => console.error(error)) // if run into error when connecting to database
db.once('open', () => console.log('Connected to Mongoose')) // once connect for first time

app.use('/', indexRouter) // use reference to route

app.listen(process.env.PORT || 3000) // listen on certain port
