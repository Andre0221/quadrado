var quadrado;
function setup() {
  createCanvas(400,400);

  quadrado =createSprite(200,200,20,20);
  quadrado.shapeColor="red";
}

function draw() 
{
  background(30);
background("black");
if (keyIsDown(UP_ARROW)){
quadrado.shapeColor="orange"
background("red");
}
if (keyIsDown(DOWN_ARROW)){
background("yellow");
quadrado.shapeColor="purple"
}
if (keyIsDown(LEFT_ARROW)){
background("green");
quadrado.shapeColor="red"
}
if (keyIsDown(RIGHT_ARROW)){
background("blue");
quadrado.shapeColor="black"
}



drawSprites();
}




