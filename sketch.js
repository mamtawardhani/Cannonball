const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var c
var angle = 90
var ball
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310);
  c = new Cannon(180,110,100,50, angle)
  ball = new CannonBall(c.x-35, c.y)

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  

 tower.display();
  c.display()
  ball.show()
 
}



