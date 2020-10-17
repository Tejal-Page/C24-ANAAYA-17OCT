class Box{
//giving properties
constructor(x,y,width,height){
this.width = width;
this.height = height;
//giving options
var options = {
    restitution:0.3,
    friction:1.0,
    density:1
}
this.object = Bodies.rectangle(x,y,width,height,options);
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
fill("blue");
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}

}