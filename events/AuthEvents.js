const _ = require('lodash'),
    BaseEvent = require('./BaseEvent')

class AuthEvents extends BaseEvent{

    /**
     * Initial event for adding user the socket network
     * Must be called when a user logs to website.
     * @param res
     * @returns {*}
     */
    login(res) {
        let that = this,
            {io, users, events} = res;

        return io.on('connection', function(sockets){

            return sockets.on('login', function(data){
                that.joinSocket(users, data.user, sockets)
                that.dispatch(res, data.user, 'loginSuccessful', "You\'re now a part of this socket group!")
            })
        })
    }

}

module.exports = new AuthEvents();
