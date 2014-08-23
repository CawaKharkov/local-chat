var io = require('socket.io').listen(8001);

io.sockets.on('connection', function (socket) {
  console.log('emit...');
  socket.emit('ping', { message: 'Hello from server ' + Date.now() });
  socket.on('pong', function (data) {
    console.log(data.message);
  });

    socket.on('someEvent', function (data) {
        console.log(data.message);
    });


    /**
     * Send hello every 5 seconds
     */
    setInterval(function(){
        socket.emit('ping', { message: 'Hello from server ' + Date.now() });
    },5000)
});

console.log('listening on port 8001');