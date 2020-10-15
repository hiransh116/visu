var dog;
var happyDog;
var datebase;
var foodS;
var foodStock



//Create variables here

function preload()
{
  //load images her
   dog=loadImage("images/dogImg.png");
   happyDog=loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

textSize(24);
fill("red");
text("press UP_ARROW to feed yaggi milk!",100,100);
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x

  })

}



