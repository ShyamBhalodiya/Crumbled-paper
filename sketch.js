
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new body(400, 700, width, 20);
	ball = new paper();
	wall1 = new body(510, 640, 20, 70);
	wall2 = new body(690, 640, 20, 70);
	wall3 = new body(600, 685, 200, 20);
	keyPressed();
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();
	ball.display()
	wall1.display(225, 0, 0);
	wall2.display(225, 0, 0);
	wall3.display(225, 0, 0);
	ground.display(0, 0, 225);
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball.body, ball.body.position, { x: 300, y: -400 });
	}
}


