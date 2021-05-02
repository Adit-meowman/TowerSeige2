const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,block32,block33,block34,block35,block36,block37,block38,block39,block40;
var stand1,stand2;
var polygon;
var slingshot,ground;
function preload(){

}

function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

polygon = new Polygon(78,170)
slingshot = new Slingshot(polygon.body,{x: 100,y:175});

ground = new Ground(600,380,1200,20);

stand1 = new Stand(500,290,300,15);
stand2 = new Stand(900,200,300,15);

block1 = new Block(380,240)
block2 = new Block(410,240)
block3 = new Block(440,240)
block4 = new Block(470,240)
block5 = new Block(500,240)
block6 = new Block(530,240)
block7 = new Block(560,240)
block8 = new Block(590,240)
block9 = new Block(620,240)

block10 = new Block(410,180)
block11 = new Block(440,180)
block12 = new Block(470,180)
block13 = new Block(500,180)
block14 = new Block(530,180)
block15 = new Block(560,180)
block16 = new Block(590,180)

block17 = new Block(470,120)
block18 = new Block(500,120)
block19 = new Block(530,120)

block20 = new Block(500,60)

 block21 = new Block(780,140)
block22 = new Block(810,140)
block23 = new Block(840,140)
block24 = new Block(870,140)
block25 = new Block(900,140)
block26 = new Block(930,140)
block27 = new Block(960,140)
block28 = new Block(990,140)
block29 = new Block(1020,140)

block30 = new Block(810,80)
block31 = new Block(840,80)
block32 = new Block(870,80)
block33 = new Block(900,80)
block34 = new Block(930,80)
block35 = new Block(960,80)
block36 = new Block(990,80)

block37 = new Block(870,20)
block38= new Block(900,20)
block39 = new Block(930,20)

block40 = new Block(900,40)
 

}

function draw(){
Engine.update(engine);
background(0);

polygon.display();

stand1.display();
stand2.display();
push();
fill("lightblue")
block1.display();
block2.display();


block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
pop();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

block17.display();
block18.display();
block19.display();

block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
block31.display();
block32.display();
block33.display();
block34.display();
block35.display();
block36.display();
block37.display();
block38.display();
block39.display();
block40.display();

ground.display();




slingshot.display();




}

function mouseReleased(){
slingshot.fly();
}

function mouseDragged(){
Body.setPosition(polygon.body,{x: mouseX, y: mouseY})

}


 
