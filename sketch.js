var car,wall,speed,weight,deformation

function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500);

  wall = createSprite(1500,200,60,height/2);
  car = createSprite(50,200,50,50);

  car.velocityX = speed;

  deformation = 0.5*weight*speed*speed/22500;
}

function draw() {

  background("black");  
  drawSprites();

  if (isTouching2(car,wall)) {

    if (deformation < 100) {

      car.shapeColor = "red";

    }

    else if (deformation > 100 && deformation < 180 )

    {

      car.shapeColor = "yellow";

    }

    else if (deformation > 180)

    {

      car.shapeColor = "green";

    }

    car.velocityX = 0;

  }


}