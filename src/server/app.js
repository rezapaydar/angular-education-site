'use strict'

const express = require('express');
const nodemailer = require("nodemailer");
const mongoose = module.exports = require('mongoose');
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express();
const buffer = require('buffer');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

 // enable cors to the server
 const corsOpt = {
  origin: process.env.CORS_ALLOW_ORIGIN || '*', // this work well to configure origin url in the server
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], // to works well with web app, OPTIONS is required
  allowedHeaders: ['Content-Type', 'Authorization'] // allow json and token in the headers
};

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.use(cors(corsOpt)); // cors for all the routes of the application
app.options('*', cors(corsOpt)); // automatic cors gen for HTTP verbs in all routes, This can be redundant but I kept to be sure that will always work.

const studentsReview = require('./schema/studentsReview');
const topCourses = require('./schema/topcourses');
const topteachers = require('./schema/topteachers');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

mongoose.connection.openUri('mongodb://127.0.0.1:27017/educationSite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error(err);
});

console.log(mongoose.connection.readyState);

//* routes backend address links  

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/general',require('./routes/general'))
app.use('/img',require('./routes/imgupload'))
app.use('/topteacher',require('./routes/topteacher'))
app.use('/topcourses',require('./routes/topcourses'))
app.use('/studentreview',require('./routes/studentReview'))
app.use('/contact',require('./routes/contactus'))
app.use('/auth',require('./routes/login'))


app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = app ;