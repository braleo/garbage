
class bin{
constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.body1 = Bodies.rectangle(x, y, width, height, options);
    this.body2 = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Image= loadImage('sprites/dustbingreen.png')
    
   

    World.add(world,this.body);
    World.add(world,this.body1);
    World.add(world,this.body2);
  }
  display(){
    var pos =this.body.position;

    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("pink");
    image(this.Image,0, 0, this.width, this.height);
    pop();
  }
}