const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,ball, iron,stone;


function setup()
{
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);

    //creating rubber ball
    ball = new Rubber(100,500,60);

    //creating iron rod
    iron = new Iron(500,height-100);

    //creating stone
    stone = new Stone(900,height-100);

}

function draw()
{
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    ball.display();
    iron.display();
    stone.display();
 
}