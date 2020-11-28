var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1 = createSprite(500,610,20,100)
	 box1.shapeColor = "red"

	 box2 = createSprite(300,610,20,100)
	 box2.shapeColor = "red"

	 box3Sprite = createSprite(400,650,200,20)
	 box3Sprite.shapeColor = "red"

	 box3Body = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
 	World.add(world, box3Body);


	Engine.run(engine);

//	Box1 = new Box(200,350,200,20)
//	Box2 = new Box(150,320,20,100)
//	Box2 = new Box(250,320,20,100)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

keyPressed();



  drawSprites();
 
  //Box1.display();
 // Box2.display();
  //Box3.display();


}



function keyPressed() {
 if (keyCode===DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
 Matter.Body.setStatic(packageBody,false)
    
  }
}



