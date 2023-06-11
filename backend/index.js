require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const homeRoute = require('./routes/homeRoute');
const app = express();
const mongoose = require('mongoose');

const url = process.env.DB_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });;

app.use(express.json());

app.use(cors());

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

app.use('/api', homeRoute);

app.use('/api/auth', authRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server listening on port ', port);
});