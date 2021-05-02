class Slingshot{
    constructor(bodyA, pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB, 
            stiffness: 0.1,
            length : 10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){

        if(this.sling.bodyA){

        
       var pointA = this.sling.bodyA.position;
       var pointB = this.sling.pointB;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}

    fly(){
    this.sling.bodyA = null;
    }
}





