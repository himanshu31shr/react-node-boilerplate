var express = require("express"),
    routes = express.Router(),
    Controller = require('../controllers/HomeController');

routes
    .get('/', Controller.index)
    .post('/', Controller.save)
    .get('/show', Controller.show)
    .get('/:id/edit', Controller.edit)
    .put('/update/:id', Controller.update)
    .delete('/:id', Controller.delete);

module.exports = routes;