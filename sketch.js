
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var roof;

function setup() {
	var canvas =  createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof = new Roof();


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  roof.display();
 
}



