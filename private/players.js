var allPlayers = []
module.exports = {
  users: 0,
  getPlayers: function(){
    console.log("Devolviendo todos los users")
    return allPlayers;
  },
  addUser: function(_u){
    allPlayers[allPlayers.length] = _u;
    console.log("se agrego un nuevo usuario");
  },
  updateUser: function(_u){
    allPlayers[_u.id].x = _u.x;
    allPlayers[_u.id].y = _u.y;
    allPlayers[_u.id].m = _u.m;
    console.log("se actualizo el usuario " + _u.id);
  },
  retriveUser: function (socketId,id) {
    console.log("Devolviendo usuario")
    tp = {};
    tp.id = id;
    tp.socketId = socketId;
    tp.x    = Math.floor(Math.random() * 100) + 1
    tp.y    = Math.floor(Math.random() * 100) + 1
    tp.w    = 1;
    tp.h    = 2;
    tp.m    = "static";
    tp.v    = 300;
    tp.st   = 0;
    return tp;
  }
};
