const _ = require('lodash')

/**
 * Base event class providing common functions
 * for managing websockets events
 *
 */
class BaseEvent{

    /**
     * Dispatches events on websocket using socket.io
     *
     * @param io
     * @param events
     * @param users
     * @param to
     * @param event
     * @param data
     */
    dispatch({io, events, users}, to, event, data){
        if(this.checkSocket(users, to) && (typeof events[event] === 'undefiend' || !events[event])){
            _.map(users[to].sockets, socket => {
                socket.emit(event, data)
            });
            events[event] = true;
        }
    }

    /**
     * Adds a user to current socket group
     *
     * @param users
     * @param identifier
     * @param socketsObject
     * @returns {*}
     */
    joinSocket(users, identifier, socketsObject){
        if(typeof users[identifier] !== 'undefined') {
            if(!_.map(users[identifier].sockets, sock => sock.id === sockets.id))
            users[identifier].sockets.push(sockets.id)
        } else {
            users[identifier] = {
                sockets:[socketsObject]
            }
        }

        return users;
    }

    /**
     * Checks if a user is in current socket group
     *
     * @param users
     * @param identifier
     * @returns {boolean}
     */
    checkSocket(users, identifier){
        if(typeof users[identifier] !== 'undefined'){
            return true
        } else {
            return false;
        }
    }

}

module.exports = BaseEvent