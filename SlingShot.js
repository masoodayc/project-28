class SlingShot {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.slingShot=Constraint.create(options);
        World.add(world,this.slingShot);
    }

    fuction attach(){
        bodyA.set(body);
    }
    display(){
        if(this.slingShot.bodyA){
            var pointA=this.slingShot.bodyA.position;
            var pointB=this.slingShot.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        
        }
        

    }

    fly(){
        this.slingShot.bodyA=null;

    }
}