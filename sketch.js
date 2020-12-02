var db;
var canvas;
var gameState=0;
var playerCount;
var allPlayers;
function setup(){
    canvas=createCanvas(displayWidth,displayHeight);
    db=firebase.database()
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1)
    }
   
}