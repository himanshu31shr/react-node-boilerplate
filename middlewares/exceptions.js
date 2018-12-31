module.exports = (err, req, res, next) => {

    if (err) {
        res.status(err.status || 500);

        let error = {
            status: false,
            message: err.message
        };

        if (process.env.ENVIRONMENT === 'development') {
            error.stack = err.stack.split("\n")
        }

        return res.json(error);
    }

    next();
};
