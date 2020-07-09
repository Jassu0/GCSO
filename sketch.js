var car, wall, speed, weight;
function setup() {
  createCanvas(1200,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);

  wall = createSprite(1000, 200, 60, height/2);
  car.velocityX = speed;
  car.shapeColor = "gray";
  wall.shapeColor  = "brown";
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x < car.width/2+wall.width/2) {
    car.velocityX = 0;
    var deform = 0.5*weight*speed*speed/22500;
    if(deform > 180) {
      car.shapeColor = "red";
    }
    if(deform < 180 && deform > 100) {
      car.shapeColor = "orange";
    }
    if(deform < 100) {
      car.shapeColor = "green";
    }
  }
  drawSprites();
}