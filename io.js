var io = require('socket.io')(); 

// listen for new connections from clients (socket)
io.on('connection', function(socket) {
    socket.on('add-circle', function(data) {
        io.emit('add-circle', data);
    });
    
    socket.on('clear', function() {
        io.emit('clear');
    });
});

// io represents socket.io on the server - import it
module.exports = io;