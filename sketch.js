var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  /*
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  */
  object1 = createSprite(100,100,50,50);
  object2 = createSprite(100,700,50,50);
  /*
  object3 = createSprite(300,100,50,50);
  object4 = createSprite(400,100,50,50);
  */
  object1.shapeColor = "green";
  object2.shapeColor = "red";

  //object1.velocityX=5;
  //object2.velocityX=-5;

  object1.velocityY=5;
  object2.velocityY=-5; 
  /*
  object3.shapeColor = "green";
  object4.shapeColor = "green";
  */
}

function draw() {
  background(0,0,0);  
  /*
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, object4)) {
    movingRect.shapeColor = "red";
    object4.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    object4.shapeColor = "green";
  }
  */
  bounceoff(object1, object2)
  drawSprites();
}

function isTouching(object1 , object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else {
      return false;
}

}
function bounceoff(object1 , object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }


  if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
    }
}