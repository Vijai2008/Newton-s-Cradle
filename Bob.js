class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      ellipse(this.body.position.x,this.body.position.y,this.radius);
      pop();
    }
  };