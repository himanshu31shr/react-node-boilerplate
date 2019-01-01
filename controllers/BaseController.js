const _ = require('lodash');

/**
 * Base Controller
 *
 * Provides common routing function to the framework.
 * @author Himanshu Shrivastava <himanshu31shr@gmail.com>
 */
class BaseController {

    constructor() {
        this.setRepository();
        this.index = this.index.bind(this);
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    /**
     * Sets repository within current object scope
     */
    setRepository() {
        this.repository = this.repository();
    }

    /**
     * Emulating abstract method to get repository by inheritance
     */
    repository() {}

    /**
     * Get method for the route
     * Valid for resource controllers
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    index(req, res, next) {
        return next(new Error('Route not defined!'))
    }

    /**
     * Post method for the route
     * Valid for resource controllers
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    save(req, res, next) {

        return next(new Error('Route not defined!'))
    }

    /**
     * Put method for the route
     * Valid for resource controllers
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    update(req, res, next) {

        return next(new Error('Route not defined!'))
    }

    /**
     * Get method for the route for showing update documents view
     * Valid for resource controllers
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    edit(req, res, next) {

        return next(new Error('Route not defined!'))
    }

    /**
     * Delete method for the route
     * Valid for resource controllers
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    delete(req, res, next) {

        return next(new Error('Route not defined!'))
    }

    /**
     * Get method for the route to show document details
     * Valid for resource controllers
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    show(req, res, next) {

        return next(new Error('Route not defined!'))
    }

}

module.exports = BaseController;