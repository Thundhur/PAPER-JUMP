class paper{
    constructor(x, y, r) {
      var hello = random(0,1);
        var options = {
            'isStatic': false,
            'restitution':1,
            'friction':0.5,
            'density':1.2,
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, r/2, options);
      this.radius = r;
        World.add(world, this.body);
        
      }
      display(){
        push();
        ellipseMode(RADIUS);
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0,this.radius*1.9,this.radius*1.9);

        pop();
      }
      jump(){
        Matter.Body.applyForce(this.body,{x:this.body.position.x,y: this.body.position.y},{x:7,y:12});

      }
}
