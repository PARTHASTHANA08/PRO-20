var car1,car2,car3,car4,wall1,wall2,wall3,wall4;

var speed,weight;
function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight =random(400,1500);
  car1 = createSprite(50, 50, 25, 25);
  car1.shapeColor = "white"
  car1.velocityX = speed;
  car2 = createSprite(50,200,25,25);
  car2.shapeColor = "white"
  car2.velocityX = speed;
  car3 = createSprite(50,350,25,25);
  car3.shapeColor = "white"
  car3.velocityX = speed;
  wall1 = createSprite(750,50,15,75);
  wall1.shapeColor = "white"
  wall2 = createSprite(750,200,15,75);
  wall2.shapeColor = "white";
  wall3 = createSprite(750,350,15,75);
  wall3.shapeColor = "white"; 
}

function draw() {
  if(wall1.x - car1.x < car1.widht + wall1.width/2){
  car1.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if(deformation > 180){
    car1.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car1.shapeColor = color(230,230,0);
  }
  if(deformation<100){
    car1.shapeColor = color(0,255,0);
  }
  }
  car1.collide(wall1);
  car2.collide(wall2);
  car3.collide(wall3);
  background(0);  
  drawSprites();
}