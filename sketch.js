const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dground, tree,treeimg;
var boy, boyimg;
var stones;
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10;

function preload(){
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	stones=new Stone(100,350,23);
	mango1=new Mango(600,290,70,70);
	mango2=new Mango(855,325,70,70);
	mango3=new Mango(670,260,70,70);
	mango4=new Mango(750,180,70,70);
	mango5=new Mango(710,320,70,70);
	mango6=new Mango(780,250,70,70);
	mango7=new Mango(825,170,70,70);
	mango8=new Mango(880,260,70,70);
	mango9=new Mango(940,220,70,70);
	mango10=new Mango(980,305,70,70);

	support1=new Ground(600,290,90,1);
	support2=new Ground(855,325,90,1);
	support3=new Ground(670,260,90,1);
	support4=new Ground(750,180,90,1);
	support5=new Ground(710,320,90,1);
	support6=new Ground(780,250,90,1);
	support7=new Ground(825,170,90,1);
	support8=new Ground(880,260,90,1);
	support9=new Ground(940,220,90,1);
	support10=new Ground(980,305,90,1);

	string=new Throw(stones.body,{x:100,y:350});

	tree=createSprite(775,400);
	tree.addImage(treeimg);
	tree.scale=2;

	boy=createSprite(160,457);
	boy.addImage(boyimg);
	boy.scale=0.5;

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);
  

  

  drawSprites();

  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  support1.display();
  support2.display();
  support3.display();
  support4.display();
  support5.display();
  support6.display();
  support7.display();
  support8.display();
  support9.display();
  support10.display();
  string.display();

}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	string.fly();
}


 
function keyPressed(){
	if(keyCode===32){
		string.attach(stones.body);
		
	}
}