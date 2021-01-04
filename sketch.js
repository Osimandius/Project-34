const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ball1=new Ball(250,100);
    ball2=new Ball(300,100);
    ball3=new Ball(350,100);
    ball4=new Ball(625,350);
    ball5=new Ball(650,350);
    rope1=new Rope(ball1.body,{x:550 ,y:100})
    rope2=new Rope(ball2.body,{x:575 ,y:100})
    rope3=new Rope(ball3.body,{x:600 ,y:100})
    rope4=new Rope(ball4.body,{x:625 ,y:100})
    rope5=new Rope(ball5.body,{x:650 ,y:100})
}

function draw(){
    background(125);
    Engine.update(engine);
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    ball1.display();
    ball2.display();
    ball5.display();
    ball4.display();
    ball3.display();
}