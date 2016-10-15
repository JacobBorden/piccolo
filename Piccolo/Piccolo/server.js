﻿var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 80;

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html')
});

app.get('/socket.io.js', function (request, response) {
    response.sendFile(__dirname + '/socket.io.js')
});

app.get('/socket.io/', function (request, response) {
    response.sendFile(__dirname + '/socket.io/')
});


io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

server.listen(port);