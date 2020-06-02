class Bob{
    constructor(x, y, angle) {
        var options = {
            'restitution':1.5,
            'frictionAir':0,
            //'inertia': Infinity,
            'density':0.3
           
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("black");
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}