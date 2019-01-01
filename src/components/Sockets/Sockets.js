import React from 'react';
import SockIo from 'socket.io-client'
import _ from 'lodash'
const io = SockIo();

/**
 * Socket class for managing websockets connection using socket.io
 */
class Sockets {

    /**
     * Manages login event
     * @param callback
     * @returns {*}
     */
    login(callback){
        return io.on('connect', function () {
            io.on('loginSuccessful', function(data){
                callback(data)
            })

            if(confirm('Do you wish to enter the sockets?')){
                io.emit('login', {
                    'user': _.random(0, 99999)
                })
            }
        })
    }
}

export default Sockets;