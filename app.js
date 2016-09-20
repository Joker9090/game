
var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

publicFolder = "/public"
app.use(publicFolder, express.static(path.join(__dirname + publicFolder)));

privateFolder = "/private"
var players = require(__dirname + privateFolder + '/players.js');

io.on('connection', function(socket){
  socket.emit('/start');
  socket.on('/player/ask',function(){
    var user = new players.retriveUser(socket.id,players.users++);
    players.addUser(user);
    socket.emit('/player/get', user);
  })
  socket.on('/players/ask',function(){
    io.emit('/players/get', players.getPlayers());
  })
  socket.on('/player/update',function(np){
    players.updateUser(np);
    io.emit('/players/get',players.getPlayers())
  });

});

http.listen(3002, function(){
  console.log('listening on *:3002');
});
