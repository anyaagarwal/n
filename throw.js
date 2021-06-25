class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB=pointB
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    fly(){
        this.string.bodyA=null
    }
    attach(body){
        this.string.bodyA = body;
    }
    display(){
        if(this.string.bodyA){
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        stroke("brown");
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}