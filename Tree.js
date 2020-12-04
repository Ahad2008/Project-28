class Tree {
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.0
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }
   display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
   }
}