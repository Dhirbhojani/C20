

var movingRect, fixedRect;
function setup() {
  createCanvas(400,400);
  //createSprite(200, 200, 50, 50);

  movingRect = createSprite(200,200,30,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(200,200,30,30);
  fixedRect.shapeColor = "green";
  movingRect.debug= true;
  fixedRect.debug= true;

}

function draw() {
  background(200,255,255);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(Math.round(movingRect.x - fixedRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(fixedRect.x - movingRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(movingRect.y - fixedRect.y) < Math.round(movingRect.height/2+fixedRect.height/2)
  && Math.round(fixedRect.y - movingRect.y) < Math.round(movingRect.height/2+fixedRect.height/2))
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}