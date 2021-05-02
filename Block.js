class Block{
    constructor(x,y){
        var options = {
            'restitution':0.8,
          'friction':0.3,
          'density':1.0
        }
        this.width = 30;
        this.height = 50;
          this.body = Bodies.rectangle(x, y, this.width, this.height, options);
          this.visiblity = 255;

          
          World.add(world, this.body);
        }
        
        display(){
          if(this.body.speed<6){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            //fill("red");
            rect(0, 0, this.width, this.height);
            pop();
          }  
          else{
            push();
            this.visiblity -=5;
            World.remove(world,this.body);
            pop();
          }
        }
         
        }
      
      
        


