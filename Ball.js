class Ball{
    constructor(x, y) {
        var options = {
            'frictionAir':0.0,
            'density':10,
            'restitution':1,
            'friction':0,
            'slop':1,
            'inertia': Infinity
        }
        this.body = Bodies.rectangle(x, y, 25, 25, options);
        this.width = 25;
        this.height = 25;
        World.add(world, this.body);
        //this.body.timeScale=0.1
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("DarkRed");
        strokeWeight(3);
        stroke("Black")
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}