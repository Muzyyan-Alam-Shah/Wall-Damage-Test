 var wall,thickness;
 var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);  
  bullet=createSprite(50,200,20,80);
  bullet.shapeColor="white";

  wall=createSpirte(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);


  bullet.velocityX=speed;




}

function draw() {
  background(255,255,255); 
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      bullet.shapeColor="red";
    }
    if(damage<10){
      bullet.shapeColor="green";
    }
  }
 
  drawSprites();
}