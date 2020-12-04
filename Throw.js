class Throw {
    constructor (bodyA, pointB) {

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness:0.0045,
            length:1
        }
        this.pointB = pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }
   
    display () {
        if(this.throw.bodyA){
        var bodyA = this.throw.bodyA.position;
        var pointB = this.pointB;
        stroke("black");
        strokeWeight(4);
        line (bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }

    fly() {
        this.throw.bodyA = null;
      }

    attach(bodyA) {
        this.throw.bodyA = bodyA;
      }
}