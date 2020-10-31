var score=0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,spawnfood,spawnObstacle
var survivalTime=0
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclImage = loadImage("obstacle.png");
  
  backgroundsImage=loadImage("tree.jpg");
 
}



function setup() {
  
  createCanvas(600,600);
  
  monkey=createSprite(70,450,20,20)
   monkey.addAnimation("running",monkey_running)
   monkey.scale=0.10
  
  //monkey.velocityX=3
   
  ground=createSprite(200,500,1200,20)
 ground.velocityX=-5 
  ground.x=ground.width/2
  
  //CREATING GROUPING
  FoodGroup= new Group();
  obstacleGroup= new Group();
  
}


function draw() {
 background("white")
  
  if(ground.x<0){
     ground.x=ground.width/2
  }
  
  if(keyDown("space")&&monkey.y>=300){
     monkey.velocityY=-20
     }
  
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  
  spawnfood ()
  spawnObstacle ()
     
     stroke("lightblue")
      textSize(30)
     survivalTime=Math.ceil(frameCount/frameRate())
  
  if(FoodGroup.isTouching(monkey)){
     score=score+1
     FoodGroup.destroyEach()
     }
  
    text("SCORE ="+score,50,50)
  drawSprites();
    text("Survivaltime :"+survivalTime,300,50)
}


function spawnfood(){
  if(frameCount%80==0){
    food=createSprite(600,50,50)
    food.addImage(bananaImage);
    food.scale=0.1;
    food.velocityX=-3
    food.y=Math.round(random(100,400)) 
    food.lifetime=200;
    FoodGroup.add(food)
  }
  }
  
function spawnObstacle(){
  if(frameCount%300==0){
    var obstacle=createSprite(600,481,20,20);
    obstacle.addImage(obstaclImage);
    obstacle.scale=0.11 
    obstacle.velocityX=-3
    
    
  }
     
     
     }
  
  






