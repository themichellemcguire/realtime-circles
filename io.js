var io = require('socket.io')(); 

var players = {};

// listen for new connections from clients (socket)
io.on('connection', function(socket) {
    socket.on('register-player', function(initials) {
        players[socket.id] =initials;
        io.emit('update-player-list', Object.values(players));
    });
    
    socket.on('disconnect', function() {
        delete players[socket.id];
        io.emit('update-player-list', Object.values(players));
    });

    socket.on('add-circle', function(data) {
        io.emit('add-circle', data);
    });

    socket.on('clear', function() {
        io.emit('clear');
    });
});

// io represents socket.io on the server - import it
module.exports = io;