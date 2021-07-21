
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world
var engine
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(200,600,1200,20)
	right = new Ground(600,540,10,100);
	left = new Ground(750,540,10,100);
	var ball_options = {
		isStatic:false,
		friction:0,
		densiti:1.2,
		
		restitution: 0.3
		
	  }
	  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);
	//Create the Bodies Here.


	Engine.run(engine);
  ellipseMode(RADIUS)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,10);
  
 ground.display()
  right.display()
  left.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ballobject.Bodies,ball.Bodies.position,{x:15,y:-15});
	}
}



