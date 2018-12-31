const express = require("express"),
    routes = express.Router();

routes.get('/', (req, res, next) => {
    res.send('get');
});

module.exports = routes;