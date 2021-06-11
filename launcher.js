class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
    
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
       push();
        if(this.launcher.bodyA){
         var pointA = this.launcher.bodyA.position;
        push();
        stroke(48,22,8);
        pop();
    }
        }

    
    }