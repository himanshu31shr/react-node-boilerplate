class AuthEvents {
    login(sock, id) {
        sock.on("connection", function (sockets) {
            sockets.join(id, () => {
                sockets.to(id).emit("login", "Logged in successfully!");
            });
        });
    }

    logout(sock, id) {
        sock.on("connection", function (sockets) {
            sockets.leave(id).emit("logout", "Logged out successfully!");
        });
    }

    idle(sock, id) {
    }
}

module.exports = new AuthEvents();
