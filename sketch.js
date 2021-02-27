var dog , sadDog , happyDog;
var f , add;
var database

function preload()
{
sadDog=loadImage("images/dogimg.png");
happyDog=loadImage("images/dogimg1.png");
}

function setup(){
	createCanvas(800, 700);
  database = firebase.database()

  dog = createSprite(800,200,150,150)
  dog.addImage(sadDog);
  dog.scale=0.5;

  foodObj = new Food();

  giveFood = createButton("Click To Feed Your Pet");
  giveFood.position(500,100);
  giveFood.mousePressed(function(){
  foodObj.updateFoodStock(foodobj.foodStock - 1);
  

}
  )}

function draw() {  
  background(46,139,87);
  drawSprites();
}



