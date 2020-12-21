var car,wall;
var speed,weight;





function setup() {
  createCanvas(800,800);
 
 car= createSprite(400,400, 50, 50);
 speed=Math.round(random(5,90))
 weight= Math.round(random(400,800))
 car.velocityX=speed;
 wall= createSprite(700,400,60,70)
 
}

function draw() {
  background(255,255,255); 
if(wall.x-car.x<wall.width/2+car.width/2){
  car.velocityX=0
  var deformation=0.5*weight*speed*speed/22509
  if(deformation<100){
    car.shapeColor="green"
  }
  if(deformation<180&&deformation>100){
    car.shapeColor="yellow"
  }
  if (deformation>180){
    car.shapeColor="red"
  }
}
  drawSprites();
}