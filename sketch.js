//CALL ENGINE,WORLD AND BODY FROM MATTER LIBRARY
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//VARIABLES
var engine , world ,box1,box2,ground,pig1,log1;
var ball;
function setup() {
  createCanvas(1200,400);
//creating the engine
engine = Engine.create();
//connect the world to the engine
world = engine.world;
//creating boxes
box1 = new Box(200,180,50,50);
box2 = new Box(400,180,50,50);
pig1 = new Pig(300,100);
ground = new Ground(width/2,height-20,width,20);
log1 = new Log(500,200,20,PI/4);
}


function draw() {
  background(255,255,255);   
  Engine.update(engine);   
 box1.display();
 box2.display();
 pig1.display();
 ground.display();
 log1.display();

}
