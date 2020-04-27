var movingRect, fixedRect;

function setup() {
  createCanvas(1000,600);
  fixedRect = createSprite(200, 200, 60, 100);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(mouseX, mouseY, 80, 30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  

  if( Math.abs(movingRect.x - fixedRect.x) <= movingRect.width/2 + fixedRect.width/2
  && Math.abs(movingRect.y-fixedRect.y )<= movingRect.height/2 + fixedRect.height/2)
  
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else { 
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }


  drawSprites();
}