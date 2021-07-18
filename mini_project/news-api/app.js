const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors')
mongoose.connect('mongodb://localhost:27018/news',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err) => (!err ? console.log('DB Connected!') : console.log('DB Not Connected.'))
);

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors()) 


// const AuthController = require('./auth/AuthController');
// app.use('/api/auth', AuthController);

const NewsController = require('./routes/NewsController')
app.use('/api/admin', NewsController)

const AdminRoutes = require('./routes/adminRoutes')
app.use('/admin', AdminRoutes)

const TopNews = require('./routes/TopNews')
app.use('/news', TopNews)

const contactRoute= require('./routes/contactRoute')
app.use('/contactus', contactRoute)

const aboutRoute= require('./routes/aboutusRoute')
app.use('/aboutus', aboutRoute)

const sportNewsRoute= require('./routes/sportsRoute')
app.use('/sportnews', sportNewsRoute)



module.exports = app;