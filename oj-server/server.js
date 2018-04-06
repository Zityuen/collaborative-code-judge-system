var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var path = require("path");
var http = require('http');

var socketIo = require('socket.io');
var io = socketIo();
// var socketService = require("services/SocketService")(io);
var socketService = require('./services/socketService')(io);


var mongoose = require("mongoose");

mongoose.connect("mongodb://user:user@ds231199.mlab.com:31199/coj");
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use("/api/v1", restRouter);
app.use(function(req, res) {
    // send index.html to start client side
    res.sendFile("index.html", { root: path.join(__dirname, '../public/') });
});


// app.listen(3000, function(){
//     console.log('App work on port 3000!')
// });

var server = http.createServer(app);
io.attach(server);
server.listen(3000,"0.0.0.0");

// server.on('error', onError);
server.on('listening', onListening);

// function onError(error) {
//     throw error;
// }

function onListening(){
    var addr = server.address();
    var bind = typeof addr == 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}
