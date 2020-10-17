class Log{
//giving properties
constructor(x,y,height,angle){
    this.width = 200;
    this.height = height;
    //giving options
    var options = {
        restitution:0,
        friction:1.0,
        density:1
    }
    this.object = Bodies.rectangle(x,y,20,height,options);
    Matter.Body.setAngle(this.object,angle);
    World.add(world,this.object);
    
    }
    //giving functions
    display(){
    var pos = this.object.position;
    var angle = this.object.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("red");
    fill("black");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }



}