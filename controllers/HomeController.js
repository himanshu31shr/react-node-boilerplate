const BaseController = require('./BaseController');

class HomeController extends BaseController {

    repository() {
        return require('../repositories/HomeRepository');
    }

    index(req, res, next) {
        // super.index(req, res, next);
        return res.render('index');
    }

    // update(req, res, next){
    //     super.update(req, res, next);
    //     return res.send(this.repository.getById());
    // }

    // show(req, res, next){
    //     return res.send('asdas')
    // }

    // edit(req, res, next){
    //     return res.send('test')
    // }
}

module.exports = new HomeController;