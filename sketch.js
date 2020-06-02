const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bird, slingShot;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    bob = new Bob(180,300);
    console.log(bob);
    
    string = new String(bob.body,{x : 180,y : 50});

  
    //console.log(string);
}

function draw(){
    background("white");
    text(mouseX + ' , '+mouseY, mouseX, mouseY);
    Engine.update(engine);
    //strokeWeight(4);
    
    text("Press 'SPACE' to swing the pendulum.", 80,330);
    text("Press 'ENTER' to stop the pendulum.", 80,350);

    ground.display();
 
    rect (177,50,5,5);
    bob.display();
    string.display();    
}

function keyPressed(){
    //start swinging the pendulum when SPACE is pressed
    if(keyCode === 32 && bob.body.speed < 1){
        Matter.Body.setPosition(bob.body, {x:100, y:100});
        Matter.Body.setStatic(bob.body, false);

    }

    //stop the pendulum from oscillating when ENTER is pressed
    if(keyCode === 13 ){
        Matter.Body.setStatic(bob.body, true);
        Matter.Body.setPosition(bob.body, {x:180, y:280});

    }
}
function stop(){
    if(keyCode === 13 && bob.body.speed > 1){
        bob.body.position.x = 100;
        bob.body.position.y = 100;
    }
}
