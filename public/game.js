// 1 Lo que sigue. Ver porque algunos ALLPLAYERS no se dibujan por arriba de los arboles u otros players si estan mas abajo
// 2 ver tema Mapa
// 2 ver tema cuando empiezan no imprime, ver si es por superposicion o algo.

getGlobalVars = function( ) {
  world = {};
  world.canvas = {};
  world.canvas.c = document.getElementById("canvas");
  world.canvas.ctx = this.world.canvas.c.getContext("2d");
  return world;
}

function startEngine(world){

  world.process = 0;
  world.processList = [];
  world.addProcess = function(_txt2add){
    world.processList[world.process] = _txt2add;
    console.log(world.process + " > " + world.processList[world.process])
    world.process++;
  }

function drawStats (){
  document.getElementById("x").innerHTML = world.toRender.player.x
  document.getElementById("y").innerHTML = world.toRender.player.y
  document.getElementById("motionX").innerHTML = world.toRender.player.motionX
  document.getElementById("motionY").innerHTML = world.toRender.player.motionY
}
  //startAnimation -> 4
  function startAnimationForPlayer(_op){
    restForW = Math.floor(world.toRender.allPlayers[_op.id].w / 2)
    restForH = Math.floor(world.toRender.allPlayers[_op.id].h / 2)
    switch (world.toRender.allPlayers[_op.id].m) {
      case "right":
        world.toRender.allPlayers[_op.id].st = 1;
        newX = world.toRender.allPlayers[_op.id].x-1
        world.toRender.allPlayers[_op.id].motionX = getPixelsFromUser("x",newX-restForW) + (world.canvas.innerPixelsBetweenLineX * world.toRender.allPlayers[_op.id].st)
        world.toRender.allPlayers[_op.id].motionY = getPixelsFromUser("y",world.toRender.allPlayers[_op.id].y-restForH)
        wpInt = world.toRender.allPlayers[_op.id].v / world.canvas.innerPixelsBetweenLineX;
        wpMoving = setInterval(function(){
          if(world.toRender.allPlayers[_op.id].st < world.canvas.partsInsideSlot){
            world.toRender.allPlayers[_op.id].st = world.toRender.allPlayers[_op.id].st+1;
            world.toRender.allPlayers[_op.id].motionX = getPixelsFromUser("x",newX-restForW) + (world.canvas.innerPixelsBetweenLineX * world.toRender.allPlayers[_op.id].st)
            world.toRender.allPlayers[_op.id].motionY = getPixelsFromUser("y",world.toRender.allPlayers[_op.id].y-restForH)
          }else{
            clearInterval(wpMoving)
            world.toRender.allPlayers[_op.id].m = "static"
            world.toRender.allPlayers[_op.id].st = 0;
          }
        },wpInt)

      break;

      case "down":
        world.toRender.allPlayers[_op.id].st = 1;
        newY = world.toRender.allPlayers[_op.id].y-1
        world.toRender.allPlayers[_op.id].motionX = getPixelsFromUser("x",world.toRender.allPlayers[_op.id].x-restForW)
        world.toRender.allPlayers[_op.id].motionY = getPixelsFromUser("y",newY-restForH) + (world.canvas.innerPixelsBetweenLineY * world.toRender.allPlayers[_op.id].st)
        wpInt = world.toRender.allPlayers[_op.id].v / world.canvas.innerPixelsBetweenLineY;
        wpMoving = setInterval(function(){
          if(world.toRender.allPlayers[_op.id].st < world.canvas.partsInsideSlot){
            world.toRender.allPlayers[_op.id].st = world.toRender.allPlayers[_op.id].st+1;
            world.toRender.allPlayers[_op.id].motionX = getPixelsFromUser("x",world.toRender.allPlayers[_op.id].x-restForW)
            world.toRender.allPlayers[_op.id].motionY = getPixelsFromUser("y",newY-restForH) + (world.canvas.innerPixelsBetweenLineY * world.toRender.allPlayers[_op.id].st)
          }else{
            clearInterval(wpMoving)
            world.toRender.allPlayers[_op.id].m = "static"
            world.toRender.allPlayers[_op.id].st = 0;``
          }
        },wpInt)

      break;
      case "left":
          world.toRender.allPlayers[_op.id].st =1;
          newX = world.toRender.allPlayers[_op.id].x+1
          world.toRender.allPlayers[_op.id].motionX = getPixelsFromUser("x",newX-restForW) - (world.canvas.innerPixelsBetweenLineX * world.toRender.allPlayers[_op.id].st)
          world.toRender.allPlayers[_op.id].motionY = getPixelsFromUser("y",world.toRender.allPlayers[_op.id].y-restForH)
          wpInt = world.toRender.allPlayers[_op.id].v / world.canvas.innerPixelsBetweenLineX;
          wpMoving = setInterval(function(){
            if(world.toRender.allPlayers[_op.id].st < world.canvas.partsInsideSlot){
              world.toRender.allPlayers[_op.id].st = world.toRender.allPlayers[_op.id].st+1;
              world.toRender.allPlayers[_op.id].motionX = getPixelsFromUser("x",newX-restForW) - (world.canvas.innerPixelsBetweenLineX * world.toRender.allPlayers[_op.id].st)
              world.toRender.allPlayers[_op.id].motionY = getPixelsFromUser("y",world.toRender.allPlayers[_op.id].y-restForH)
            }else{
              clearInterval(wpMoving)
              world.toRender.allPlayers[_op.id].m = "static"
              world.toRender.allPlayers[_op.id].st = 0;
            }
          },wpInt)
      break;
      case "up":
        world.toRender.allPlayers[_op.id].st = 1;
        newY = world.toRender.allPlayers[_op.id].y+1
        world.toRender.allPlayers[_op.id].motionX = getPixelsFromUser("x",world.toRender.allPlayers[_op.id].x-restForW)
        world.toRender.allPlayers[_op.id].motionY = getPixelsFromUser("y",newY-restForH) - (world.canvas.innerPixelsBetweenLineY * world.toRender.allPlayers[_op.id].st)
        wpInt = world.toRender.allPlayers[_op.id].v / world.canvas.innerPixelsBetweenLineY;
        wpMoving = setInterval(function(){
          if(world.toRender.allPlayers[_op.id].st < world.canvas.partsInsideSlot){
            world.toRender.allPlayers[_op.id].st = world.toRender.allPlayers[_op.id].st+1;
            world.toRender.allPlayers[_op.id].motionX = getPixelsFromUser("x",world.toRender.allPlayers[_op.id].x-restForW)
            world.toRender.allPlayers[_op.id].motionY = getPixelsFromUser("y",newY-restForH) - (world.canvas.innerPixelsBetweenLineY * world.toRender.allPlayers[_op.id].st)
          }else{
            clearInterval(wpMoving)
            world.toRender.allPlayers[_op.id].m = "static"
            world.toRender.allPlayers[_op.id].st = 0;
          }
        },wpInt)
      break;
    }
  }
  function graphEngine(){
     world.canvas.ctx.clearRect(0, 0, world.canvas.c.width, world.canvas.c.height);
    function drawPlayer(){
      startXToDraw = Math.floor(world.canvas.slotsX / 2 - (world.toRender.player.w/2))
      startYToDraw = Math.floor(world.canvas.slotsY / 2 - (world.toRender.player.h/2))
      world.canvas.ctx.fillStyle = "white";
      world.canvas.ctx.fillRect(getPixels( "x", startXToDraw ),getPixels( "y",startYToDraw ), world.canvas.slotPixelsBetweenLineX*world.toRender.player.w , world.canvas.slotPixelsBetweenLineY*world.toRender.player.h);
      drawStats();
    }

    drawPlayer();

    function drawPlayers(){

      for (var i = 0; i < world.toRender.allPlayers.length; i++) {
        if(world.toRender.allPlayers[i].id != world.toRender.player.id){
          if(world.toRender.allPlayers[i].m != "static" && world.toRender.allPlayers[i].st == 0  )   startAnimationForPlayer(world.toRender.allPlayers[i])
          if(world.toRender.allPlayers[i].m == "static"){
            world.canvas.ctx.fillStyle = "red";
            world.canvas.ctx.fillRect(
              getPixelsFromUser( "x" , world.toRender.allPlayers[i].x - world.toRender.allPlayers[i].w + 1 ),
              getPixelsFromUser( "y" , world.toRender.allPlayers[i].y - world.toRender.allPlayers[i].h + 1 ),
              world.canvas.slotPixelsBetweenLineX*world.toRender.allPlayers[i].w,
              world.canvas.slotPixelsBetweenLineY*world.toRender.allPlayers[i].h
            );
            // console.log(getPixelsFromUser( "x" , world.toRender.objects[i].x ) +" "+ getPixelsFromUser( "y" , world.toRender.objects[i].y ) + " " + world.canvas.slotPixelsBetweenLineX*world.toRender.objects[i].w + " " + world.canvas.slotPixelsBetweenLineY*world.toRender.objects[i].h)
            if( (world.toRender.allPlayers[i].x+2 > world.toRender.player.x) && (world.toRender.allPlayers[i].x-2 < world.toRender.player.x) ) {
              if(world.toRender.allPlayers[i].y == world.toRender.player.y-1) drawPlayer();
            }
          }else{
            world.canvas.ctx.fillStyle = "red";
            world.canvas.ctx.fillRect(
              (world.toRender.allPlayers[i].motionX - world.toRender.allPlayers[i].w + 1),
              (world.toRender.allPlayers[i].motionY - world.toRender.allPlayers[i].h + 1),
              world.canvas.slotPixelsBetweenLineX*world.toRender.allPlayers[i].w,
              world.canvas.slotPixelsBetweenLineY*world.toRender.allPlayers[i].h
            );
            // console.log(getPixelsFromUser( "x" , world.toRender.objects[i].x ) +" "+ getPixelsFromUser( "y" , world.toRender.objects[i].y ) + " " + world.canvas.slotPixelsBetweenLineX*world.toRender.objects[i].w + " " + world.canvas.slotPixelsBetweenLineY*world.toRender.objects[i].h)
            if( (world.toRender.allPlayers[i].x+2 > world.toRender.player.x) && (world.toRender.allPlayers[i].x-2 < world.toRender.player.x) ) {
              if(world.toRender.allPlayers[i].y == world.toRender.player.y-1) drawPlayer();
            }
            // world.canvas.ctx.fillRect(
            //   getPixelsFromUserWithMotion( "x" , world.toRender.allPlayers[i].motionX - world.toRender.allPlayers[i].w + 1 ),
            //   getPixelsFromUserWithMotion( "y" , world.toRender.allPlayers[i].motionY - world.toRender.allPlayers[i].h + 1 ),
            //   world.canvas.slotPixelsBetweenLineX*world.toRender.allPlayers[i].w,
            //   world.canvas.slotPixelsBetweenLineY*world.toRender.allPlayers[i].h
            // );
            // // console.log(getPixelsFromUser( "x" , world.toRender.objects[i].x ) +" "+ getPixelsFromUser( "y" , world.toRender.objects[i].y ) + " " + world.canvas.slotPixelsBetweenLineX*world.toRender.objects[i].w + " " + world.canvas.slotPixelsBetweenLineY*world.toRender.objects[i].h)
            // if( (world.toRender.allPlayers[i].x+2 > world.toRender.player.x) && (world.toRender.allPlayers[i].x-2 < world.toRender.player.x) ) {
            //   if(world.toRender.allPlayers[i].y == world.toRender.player.y-1) drawPlayer();
            // }
          }
        }
      }
    }

    drawPlayers()
    function drawObjects(){
      for (var i = 0; i < world.toRender.objects.length; i++) {
        world.canvas.ctx.fillStyle = "blue";
        world.canvas.ctx.fillRect(getPixelsFromUser( "x" , world.toRender.objects[i].drawX ),getPixelsFromUser( "y" , world.toRender.objects[i].drawY ), world.canvas.slotPixelsBetweenLineX*world.toRender.objects[i].w , world.canvas.slotPixelsBetweenLineY*world.toRender.objects[i].h );
        // console.log(getPixelsFromUser( "x" , world.toRender.objects[i].x ) +" "+ getPixelsFromUser( "y" , world.toRender.objects[i].y ) + " " + world.canvas.slotPixelsBetweenLineX*world.toRender.objects[i].w + " " + world.canvas.slotPixelsBetweenLineY*world.toRender.objects[i].h)
        if(
          (world.toRender.objects[i].x+2 > world.toRender.player.x) &&
          (world.toRender.objects[i].x-2 < world.toRender.player.x)
          ){
            if(world.toRender.objects[i].y == world.toRender.player.y-1) drawPlayer();
        }
      }
    }
    drawObjects();

    requestAnimationFrame(graphEngine);
  }
  callToStartAnimation = function(){
    requestAnimationFrame(graphEngine);
  }
  //startAnimation -> 4

  //getAllPlayers -> 3
  function getAllPlayers(end){
    world.toRender.comparatePlayers = []
    function comparatePlayers(newPlayersList){
      if(world.toRender.comparatePlayers.length == 0) return newPlayersList;
      for (var i = 0; i < world.toRender.comparatePlayers.length; i++) {
        // console.log("id:"+ i +" oldX:"+world.toRender.comparatePlayers[i].x+" newX: "+newPlayersList[i].x+" oldY:"+world.toRender.comparatePlayers[i].y+" newY:"+newPlayersList[i].y)
        tempM = (world.toRender.comparatePlayers[i].x < newPlayersList[i].x) ? "right" :
        (world.toRender.comparatePlayers[i].x > newPlayersList[i].x) ? "left" :
        (world.toRender.comparatePlayers[i].y < newPlayersList[i].y) ? "down" :
        (world.toRender.comparatePlayers[i].y > newPlayersList[i].y) ? "up" : "static";
        world.toRender.comparatePlayers[i] = newPlayersList[i]
        newPlayersList[i].m = tempM;
        // if(newPlayersList[i].m != "static") console.log(i + " " + newPlayersList[i].m)
      }
      return newPlayersList;
    }
    socket.emit('/players/ask')
    socket.on('/players/get',function(AP){
      world.toRender.allPlayers = comparatePlayers(AP);
      world.toRender.comparatePlayers = AP;
      end();
    })
  }
  callToGetAllPlayers = function(){
    getAllPlayers(function(){
      callToStartAnimation();
    })
  }
  //getAllPlayers -> 3

  //getWorldObjects -> 2
  function getWorldObjects(end){
    function makeTree(x,y){
      t = {}
      t.x = x;
      t.y = y;
      t.w = 1
      t.h = 4;
      t.drawX = x-t.w+1;
      t.drawY = y-t.h+1;
      return t;
    }
    Objects = function(){
      world.toRender.objects = []
      // world.toRender.objects[world.toRender.objects.length] = makeTree(50,51)
      world.toRender.objects[world.toRender.objects.length] = makeTree(49,49)
    }()
    world.addProcess("Termino de renderizar objetos del Mapa");
    end()
  }
  callToGetWorldObjects = function(){
    getWorldObjects(function(){
      callToGetAllPlayers()
    })
  }
  //getWorldObjects -> 2

  //getPlayer -> 1
  function getPlayer(end) {
    socket.emit("/player/ask");
    function addKeyListener(){
      function moveTo(code){
        step = 1;
        switch (code) {
          case 39:
          //derecha
          int = world.toRender.player.v / world.canvas.innerPixelsBetweenLineX;
          world.toRender.player.x++;
          world.toRender.player.motionX= world.toRender.player.motionX + world.canvas.innerPixelsBetweenLineX;
          moovingInterval = setInterval(function(){
            if(step < world.canvas.partsInsideSlot){
              step++;
              world.toRender.player.motionX+= world.canvas.innerPixelsBetweenLineX;
            }else{
              clearInterval(moovingInterval);
              step = 0;
            }
          },int);
          break;
          case 40:
          //abajo
          int = world.toRender.player.v / world.canvas.innerPixelsBetweenLineY;
          world.toRender.player.y++;
          world.toRender.player.motionY= world.toRender.player.motionY + world.canvas.innerPixelsBetweenLineY;
          moovingInterval = setInterval(function(){
            if(step < world.canvas.partsInsideSlot){
              step++;
              world.toRender.player.motionY= world.toRender.player.motionY + world.canvas.innerPixelsBetweenLineY;
            }else{
              clearInterval(moovingInterval);
              step = 0;
            }
          },int);
          break;
          case 37:
          //izquierda
          int = world.toRender.player.v / world.canvas.innerPixelsBetweenLineX;
          world.toRender.player.x--;
          world.toRender.player.motionX = world.toRender.player.motionX - world.canvas.innerPixelsBetweenLineX;
          moovingInterval = setInterval(function(){
            if(step < world.canvas.partsInsideSlot){
              step++;
              world.toRender.player.motionX= world.toRender.player.motionX - world.canvas.innerPixelsBetweenLineX;
            }else{
              clearInterval(moovingInterval);
              step = 0;
            }
          },int);
          break;
          case 38:
          //arriba
          int = world.toRender.player.v / world.canvas.innerPixelsBetweenLineY;
          world.toRender.player.y--;
          world.toRender.player.motionY= world.toRender.player.motionY - world.canvas.innerPixelsBetweenLineY;
          moovingInterval = setInterval(function(){
            if(step < world.canvas.partsInsideSlot){
              step++;
              world.toRender.player.motionY= world.toRender.player.motionY - world.canvas.innerPixelsBetweenLineY;
            }else{
              clearInterval(moovingInterval);
              step = 0;
              world.toRender.player.st = step;
            }
          },int);
          break;
        }
        updatePlayer(world.toRender.player);
      }

      function updatePlayer(wp){
        _wp = {};
        _wp.id = wp.id;
        _wp.x  = wp.x;
        _wp.y  = wp.y;
        _wp.m  = wp.m;
        _wp.motionX  = wp.motionX;
        _wp.motionY  = wp.motionX;
        drawStats();
        socket.emit("/player/update", _wp)
      }

      window.addEventListener("keydown", keyDown);
      moveInterval = undefined;
      function keyDown(e){
        if(moveInterval !== undefined) {
          return false;
        }else{
          moveTo(e.keyCode)
          moveInterval = setInterval(function(){
            clearInterval(moveInterval)
            moveInterval = undefined;
          },world.toRender.player.v);
        }
        // document.getElementById("keyPres").innerHTML = e.keyCode;
      }
    }

    askPlayer = function(p){
      _p = {}
      _p.id   = p.id
      _p.name = "bartuken";
      _p.x    = 50 //p.x;
      _p.y    = 50 //p.y;
      _p.w    = p.w;
      _p.h    = p.h;
      _p.m    = p.m;
      _p.v    = p.v;
      _p.st   = 0;
      _p.motionX = _p.x * world.canvas.innerPixelsBetweenLineX * world.canvas.partsInsideSlot;
      _p.motionY = _p.y * world.canvas.innerPixelsBetweenLineY * world.canvas.partsInsideSlot;
      return _p;
    }
    world.toRender = {};
    socket.on("/player/get",function(p){
      world.toRender.player = askPlayer(p);
      world.addProcess("Termina de obtener el Player");
      socket.emit("/player/update", p)
      addKeyListener();
      end();
    })

  }
  callToGetPlayer = function(){
    getPlayer(function(){
      callToGetWorldObjects();
    });
  }
  //getPlayer -> 1

  //renderCanvas -> 0
  function getPixels(type,number) {
    if(type == "x"){
      return world.canvas.slotPixelsBetweenLineX * number
    }else if(type == "y"){
      return world.canvas.slotPixelsBetweenLineY * number
    }
  }

  function getPixelsFromUser(type,number) {
    if(type == "x"){
      if(world.toRender.player.motionX > getPixels("x",number)){
        resto = getPixels("x",5) -  (world.toRender.player.motionX - getPixels("x", number))
      }else{
        resto = getPixels("x",5) + (getPixels("x", number) - world.toRender.player.motionX)
      }
      return resto
    }else if(type == "y"){
      if(world.toRender.player.y > getPixels("y",number)){
        resto =  getPixels("y",5) - (world.toRender.player.motionY - getPixels("y", number) )
      }else{
        resto =  getPixels("y",5) + (getPixels("y", number) - world.toRender.player.motionY)
      }
      return resto
    }
  }
  function getPixelsFromUserWithMotion(type,number){
    if(type == "x"){
      if(world.toRender.player.motionX > number){
        resto = getPixels("x",5) -  (world.toRender.player.motionX - number)
      }else{
        resto = getPixels("x",5) + number - world.toRender.player.motionX
      }
      return resto
    }else if(type == "y"){
      if(world.toRender.player.y > number){
        resto =  getPixels("y",5) - (world.toRender.player.motionY - number )
      }else{
        resto =  getPixels("y",5) + number - world.toRender.player.motionY
      }
      return resto
    }
  }
  function renderCanvas(end){
    world.canvas.totalWidth = world.canvas.c.width;
    world.canvas.totalHeight = world.canvas.c.height;

    world.canvas.rows = 33;
    world.canvas.columns = 33;
    world.canvas.innerPixelsBetweenLineX =  (world.canvas.totalWidth / world.canvas.columns);
    world.canvas.innerPixelsBetweenLineY = (world.canvas.totalHeight / world.canvas.rows);

    world.canvas.partsInsideSlot = 3;
    world.canvas.slotsX = world.canvas.columns / world.canvas.partsInsideSlot;
    world.canvas.slotsY = world.canvas.rows / world.canvas.partsInsideSlot;
    world.canvas.slotPixelsBetweenLineX = (world.canvas.totalWidth / world.canvas.slotsX);
    world.canvas.slotPixelsBetweenLineY = (world.canvas.totalHeight / world.canvas.slotsY);
    renderMap = function(wc){
      //Total Cuadrillas
      for (var i = 0 ; i <= wc.rows; i++) {
        wc.ctx.beginPath();
        wc.ctx.moveTo(0,(i*wc.innerPixelsBetweenLineY));
        wc.ctx.lineTo(wc.totalWidth,(i*wc.innerPixelsBetweenLineY));
        wc.ctx.strokeStyle="#FFFF00";
        wc.ctx.stroke();
      }
      for (var i = 0; i <= wc.columns; i++) {
        wc.ctx.beginPath();
        wc.ctx.moveTo((i*wc.innerPixelsBetweenLineX),0);
        wc.ctx.lineTo((i*wc.innerPixelsBetweenLineX),wc.totalHeight);
        wc.ctx.strokeStyle="#FFFF00";
        wc.ctx.stroke();
      }
      //Total Slots

      for (var i = 0 ; i <= wc.rows; i++) {
        wc.ctx.beginPath();
        wc.ctx.moveTo(0,(i*wc.slotPixelsBetweenLineY));
        wc.ctx.lineTo(wc.totalWidth,(i*wc.slotPixelsBetweenLineY));
        wc.ctx.strokeStyle="#FF0000";
        wc.ctx.stroke();
      }
      for (var i = 0; i <= wc.columns; i++) {
        wc.ctx.beginPath();
        wc.ctx.moveTo((i*wc.slotPixelsBetweenLineX),0);
        wc.ctx.lineTo((i*wc.slotPixelsBetweenLineX),wc.totalHeight);
        wc.ctx.strokeStyle="#FF0000";
        wc.ctx.stroke();
      }

    }(world.canvas);
    world.addProcess("Termino de renderizar el Mapa");
    end();
  }
  callToRenderCanvas = function(){
    renderCanvas(function(){
      callToGetPlayer();
    });
  }();
  //renderCanvas -> 0

}
loadGame = function(){

}
var socket = io();
socket.on('/start', function(){
  startEngine(getGlobalVars())
});
