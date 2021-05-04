const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var boy,tree;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var slingShot;


function preload() {
    boy = loadImage("images/boy.png");
    tree = loadImage("images/tree.png");
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(650,height,1300,20);
    stone = new Stone(235,420,30);
    mango1 = new Mango(1100,200,30);
    mango2 = new Mango(1000,200,30);
    mango3 = new Mango(900,200,30);
    mango4 = new Mango(950,150,30);
    mango5 = new Mango(1050,250,30);

    slingShot = new SlingShot(stone.body,{ x: 235, y: 420 });

}

function detectCollision(mango,Stone){
     
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:235, y:420})
        slingShot.attach(stone.body);
    }
}

function draw(){

    background(255);
    Engine.update(engine);

    detectcollision(stone,mango1);
    detectcollision(stone,mango2);
    detectcollision(stone,mango3);
    detectcollision(stone,mango4);
    detectcollision(stone,mango5);
    
    ground.display();
    image(boy,200,360,200,200);
    image(tree,800,50,350,600);
    stone.display();
    slingShot.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    

    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
