const FriendRepository = require("../repositories/frontend/User/FriendRepository");

class FriendRequests {
    constructor() {
        this.service = FriendRepository;
    }

    sendRequest(sock) {
    }

    receiveRequest(sock, user_id) {
        sock.to(user_id).emit("Request received!");
    }

    confirmed(sock) {
    }

    cancelled(sock) {
    }
}

module.exports = new FriendRequests();
