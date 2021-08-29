const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower;
var ground;
var cannon;
var angle

function preload() {
    backgroundImg = loadImage("assets/background.gif");  

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    tower= new Tower(150,350,160,310)
    ground= new Ground(600, 550, 1200, 100)
    angle=-PI/4;
    cannon= new Cannon(180, 100, 100,50, angle)
}

function draw(){
    background(backgroundImg);

    Engine.update(engine);
    ground.display()
    tower.display()
    cannon.display()
}
