const _ = require('lodash');

class BaseController {

    constructor() {
        this.setRepository();
        this.index = this.index.bind(this);
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    setRepository() {
        this.repository = this.repository();
    }

    repository() {
    }

    index(req, res, next) {
        return next(new Error('Route not defined!'))
    }

    save(req, res, next) {

        return next(new Error('Route not defined!'))
    }

    update(req, res, next) {

        return next(new Error('Route not defined!'))
    }

    edit(req, res, next) {

        return next(new Error('Route not defined!'))
    }

    delete(req, res, next) {

        return next(new Error('Route not defined!'))
    }

    show(req, res, next) {

        return next(new Error('Route not defined!'))
    }

}

module.exports = BaseController;