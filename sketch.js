var ball;
var database;
var playerCount;
var gameState = 0;
var player, form, game;
var allPlayers;
var cars,car1,car2,car3,car4;

function setup() {
    database = firebase.database();
    createCanvas(displayWidth-20, displayHeight-100);
    
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
    background("white");

    if (playerCount === 4) {
        game.updateState(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
    
  
}

