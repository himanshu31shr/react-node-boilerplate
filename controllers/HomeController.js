const BaseController = require('./BaseController'),
    Models = require('../models'),
    AuthEvents = require('../events/AuthEvents')

class HomeController extends BaseController {

    repository() {
        return require('../repositories/HomeRepository');
    }

    index(req, res, next) {
        return Models.user
            .findAll({
                attributes:['id', 'name']
            })
            .then(docs => {
                AuthEvents.login(res)
                return res.render('index');
            })
            .catch(err => next(new Error(err)))

    }
}

module.exports = new HomeController;