var movingRect,fixedRect;
var rect1,rect2;

function setup() {
 createCanvas(1200,800);
  movingRect=createSprite(400, 200, 80, 30);
fixedRect=createSprite(500,300,50,80);
movingRect.shapeColor="green";
fixedRect.shapeColor="green";

rect1=createSprite(1000,100,50,50);
rect2=createSprite(1000,700,50,50);
rect1.shapeColor="pink";
rect2.shapeColor="pink";
rect1.debug=true;
rect2.debug=true;

rect1.velocityY=5;
rect2.velocityY=-5;

movingRect.debug=true;
fixedRect.debug=true;
}

function draw() {
  background(0,0,0);  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

console.log(movingRect.x);
console.log(fixedRect.x);

if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2
  && fixedRect.x-movingRect.x<= movingRect.width/2 + fixedRect.width/2 
  && movingRect.y-fixedRect.y<= movingRect.height/2 + fixedRect.height/2 
  && fixedRect.y - movingRect.y<=movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";

}else{
  movingRect.shapeColor="green";
fixedRect.shapeColor="green";
}


if(rect1.y-rect2.y <= rect1.height/2 + rect2.height/2
  && rect2.y-rect1.y <= rect1.height/2 + rect2.height/2){
    rect1.velocityY=rect1.velocityY*(-1);
    rect2.velocityY=rect2.velocityY*(-1);

  }
  drawSprites();
}