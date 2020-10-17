class Pig{
//giving properties
constructor(x,y){
    this.width = 50;
    this.height = 40;
    //giving options
    var options = {
        restitution:0.6,
        friction:1.0,
        density:0.4
    }
    this.object = Bodies.rectangle(x,y,50,40,options);
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
    stroke("black");
    fill("pink");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }



}