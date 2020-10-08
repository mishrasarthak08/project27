class Roof {
    constructor() {
        var roofoptions = { 
            ​     isStatic: true 
               }
  
     this.body = Bodies.rectangle(400,100,800,10,roofoptions); 
     this.width = 800; 
     this.height = 10; 
     World.add(world, this.body);
    } 
    display(){ 
     var pos =this.body.position;
     rectMode(CENTER);
     fill("brown");
     rect(pos.x, pos.y, this.width, this.height);
    } }