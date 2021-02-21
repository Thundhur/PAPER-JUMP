
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var g,p,d,dd,ddd;
var gamestate = "ready";
var dust,bin;
function preload()
{
	dust = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


	g = new ground(400,400,800,20);
	p = new paper(200,200,15);
	d = new dustbin(500,250,25,275);
	dd = new dustbin(600,400,230,25);
	ddd = new dustbin(700,250,25,275);
	Engine.run(engine);
	bin = createSprite(600,200,1,1);
  
}


function draw() {
  
	background(135, 206, 235);
	bin.addImage(dust);
  Engine.update(engine);  
  g.display();
  p.display();
  ddd.display();
  d.display();
  dd.display();
if (keyDown(38) && gamestate === "ready"){
	p.jump();
	gamestate = "read";
}

 
}



