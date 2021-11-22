var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
  console.log('[booting cicloacqua]');
  console.log('[listening to requests on port 4000]');
});

// app.use(function(req, res, next) {
//   console.log('pippo')
//   res.setHeader('Access-Control-Allow-Origin','*')
//   next()
// })

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', function(socket){
  //console.log('made socket connection', socket.id);

/*   //handle chat events
  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  }); */

  //handle update events
  socket.on('update', function(data){
    io.sockets.emit('update', data);
  });

  socket.on('ended', function(data){
    io.sockets.emit('ended', data);
  });
});
