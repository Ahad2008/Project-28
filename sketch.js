const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, boy, stone;
var mango1, mongo2, mango3, mango4, mango5, mango6, mango7;
var stoneThrow;
 
function preload()
{

}

function setup() 
{
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(150,600,40);

	mango1 = new Mango(1000,300,60);
	mango2 = new Mango(1100,250,60);
	mango3 = new Mango(1200,200,60);
	mango4 = new Mango(1200,300,60);
	mango5 = new Mango(1100,370,60);
	mango6 = new Mango(1350,300,60);
	mango7 = new Mango(1270,350,60);

	//ground = new Ground(750,800,1500,20);

	boy = new Boy(500, 650, 400, 500);

	tree = new Tree(1150, 450, 700, 700);
	
	stoneThrow = new Throw(stone.body, {x:480,y:500});

	Engine.run(engine);
	
}

function draw() 
{
  rectMode(CENTER);
  background(200);

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();
  stoneThrow.display();
//	ground.display();

	boy.display();

	detectCollision (stone, mango1)
	detectCollision (stone, mango2)
	detectCollision (stone, mango3)
	detectCollision (stone, mango4)
	detectCollision (stone, mango5)
	detectCollision (stone, mango6)
  detectCollision (stone, mango7)
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    stoneThrow.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x: 150, y: 600});
    stoneThrow.attach(stone.body);
  }
}

function detectCollision (lstone,lmango) {

	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if (distance <= lmango.radius + lstone.radius) {
			Matter.Body.setStatic(lmango.body, false);
		}
}