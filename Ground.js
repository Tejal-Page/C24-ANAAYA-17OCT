class Ground{
//giving properties
constructor(x,y,width,height){
    this.width = width;
    this.height = height;
    //giving options
    var options = {
        isStatic:true
    }
    this.object = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.object);
    
    }
    //giving functions
    display(){
    var pos = this.object.position;
    strokeWeight(3);
    stroke("green");
    fill("yellow");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    
    }

    
}