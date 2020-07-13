const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 800);
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  
  bobDiaMeter =40;
  stand = new Roof(400, 50, 700, 20);
  bob1 = new Bob(200, 575, bobDiaMeter);
  rope1 = new Rope(bob1.body, stand.body, -4*bobDiaMeter,0);
  
    
  bob2 = new Bob(300, 575, bobDiaMeter);
  rope2 = new Rope(bob2.body, stand.body, -2*bobDiaMeter,0);

  bob3 = new Bob(400, 575, bobDiaMeter);
  rope3 = new Rope(bob3.body, stand.body, 0,0);

  bob4 = new Bob(500, 575, bobDiaMeter);
  rope4 = new Rope(bob4.body, stand.body, 2*bobDiaMeter,0);

  
  bob5 = new Bob(600, 575, bobDiaMeter);
  rope5 = new Rope(bob5.body, stand.body, 4*bobDiaMeter,0);
  
  
}
function draw() {
  background(180);

 

  rope1.display();
  bob1.display();
  
  rope2.display();
  bob2.display();
 
  rope3.display();
  bob3.display();
  
  rope4.display();
  bob4.display();
 
  rope5.display();
  bob5.display();
  
  stand.display();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -105, y: -45});
  }
}



