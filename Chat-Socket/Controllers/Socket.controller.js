module.exports = server => {
    const SocketIo = require('socket.io')(server);
    SocketIo.on('connection', io => {
        io.on('chat', msg => {
            SocketIo.emit('chat', msg);
        });
    });
}