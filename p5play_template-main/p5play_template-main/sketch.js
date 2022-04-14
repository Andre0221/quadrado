var quadrado;
function setup() {
  createCanvas(400,400);

  quadrado =createSprite(200,200,20,20);
  quadrado.shapeColor="red";
}

function draw() 
{
  background(30);

if (keyIsDown(UP_ARROW)){

  quadrado.position.y=quadrado.position.y-2;
}
if (keyIsDown(DOWN_ARROW)){

  quadrado.position.y=quadrado.position.y+2;
}
if (keyIsDown(LEFT_ARROW)){

  quadrado.position.x=quadrado.position.x-2;
}
if (keyIsDown(RIGHT_ARROW)){

  quadrado.position.x=quadrado.position.x+2;
}



drawSprites();
}




