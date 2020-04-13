var fixedRect; movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(160,200,30,80);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}

function draw() {
  background(0);  
  drawSprites();
movingRect.x = mouseX;
movingRect.y = mouseY;
if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
  &&  fixedRect.x-movingRect.x <fixedRect.width/2 + movingRect.width/2
  &&  fixedRect.y - movingRect.y< fixedRect.height/2 + movingRect.height/2
  &&  movingRect.y - fixedRect.y< movingRect.height/2 + fixedRect.height/2){
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";

}
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}


}