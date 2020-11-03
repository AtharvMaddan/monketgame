
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 }



function setup() {
  foodGroup = new Group()
  obstacleGroup = new Group()
  monkey =createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
 
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x =ground.width/2


  
}


function draw() {
    background(180);
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8
          
      if(ground.x<0){
        ground.x = ground.width/2
        
      }
    monkey.collide(ground)
  bananas();
  obs();
  drawSprites()
  
  
}

function bananas() {

 if (frameCount % 80 === 0){
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200)
    banana.velocityX = -5
    banana.addImage(bananaImage)
    banana.setLifeTime = 200
    banana.scale = 0.05
    foodGroup.add(banana)
 }
  
  
}

function obs() {
  if (frameCount % 300===0){
      obstacle = createSprite(800,320,10,40);
      obstacle.addImage(obstacleImage)
      obstacle.scale = 0.15
      obstacle.setVelocityX = -6
      obstacleGroup.add(obstacle)
}
}



  














