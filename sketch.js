
const engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var eng,world
var mom,dad,bro,paper2,groun;

function preload()
{
	
}

function setup() {
	createCanvas(800, 780)


	eng = engine.create();
	world= eng.world;

	//Create the Bodies Here.


  paper2 = new paper(100,600,45)
//	mom = new bin(630,640,20,100);
	dad =  new bin(640,620,160,150);
//bro = new bin (750,640,20,100);
 
 
  groun = new Ground(400,690,width,20);
  
}


function draw() {
  rectMode(CENTER);
  engine.update(eng)
  background(225);
  paper2.display();
 // bro.display();
  //mom.display();
 dad.display();
  groun.display();
 
  
  
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper2.body,paper2.body.position,{x:65,y:-65})

}

}





