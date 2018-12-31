class FollowerEvents {
    followed(sock, id) {
        sock.in(id).clients((err, clients) => {
            console.log(err);
            console.log(clients);
        });
        sock.on("connection", function (socket) {
            return socket.to(id).emit("followed", "Somebody followed you");
        });
    }
}

module.exports = new FollowerEvents();
