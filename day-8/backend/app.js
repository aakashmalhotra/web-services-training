const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to display all the headers before reaching the routers
app.use((req, res, next) => {
    console.log(req.headers);
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((err, req, resp, next) => {
    if (err && err.error && err.error.isJoi) {
        resp.status(400).json({
            message: err.error.toString(),
            error: err.message
        });
    }
    else
        throw err;
});

// Global/default Error handler 
app.use((err, req, resp, next) => {
    resp.status(500).json({
        message: "Something went wrong",
        error: err.message
    });
    return;
});

module.exports = app;
