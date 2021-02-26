score = 0;
gameState = "start"
var tiles;
function preload(){
  bg = loadImage("Background4.jpg")
}

function setup() {
  createCanvas(450,590);

 
}

function draw() {
  background(bg);  
 
  console.log(frameCount)
  rectMode(CENTER)

  if(gameState==="start"){
    textSize(20)
    fill("white")
    text("Press SPACE key to start this game",60,300);
  }
  if(keyDown("space")){
    gameState="play";
  }
  if (gameState==="play"){
    spawnTiles();

  fill("white");
 textSize(19);
 text("Score :"+score,180,20);

  drawSprites();
  if(mousePressedOver(tiles)){
    tiles.shapeColor = "white";
    score = score+2;
  }
  
}
}

function spawnTiles(){
  if(frameCount %50 === 0 ){
    tiles = createSprite(random(50,400), 0, 80,80);
    tiles.shapeColor = "black";
    tiles.velocityY = 10+(1*score/10);
    tiles.lifetime = 60;
  }
}
