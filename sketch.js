
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1000,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bobObject1 = new Bob(200,480);
     bobObject2 = new Bob(300,480);
     bobObject3 = new Bob(400,480);
     bobObject4 = new Bob(500,480);
     bobObject5 = new Bob(600,480);
     roof1 = new Roof(450,20,700,30);
     rope1 =new Rope(bob.body,{x:500,y:200});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  
  drawSprites();
 
}



