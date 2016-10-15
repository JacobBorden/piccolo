var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 80;

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html')
});

app.get('/socket.io.js', function (request, response) {
    response.sendFile(__dirname + '/socket.io.js')
});



io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

server.listen(process.env.port);