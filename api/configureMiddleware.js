// third party middleware
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');



// my middleware
function logger(req, res, next) {
    console.log({
        request_method: req.method,
        request_url: req.url,
        timestamp: Date().toString()
    });
    next();
};


module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(logger);
    server.use(cors());
}