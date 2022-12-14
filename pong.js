//ball variables

let xBall = 300;
let yBall = 200;
let diameter = 15;
let xSpeedBall = 6;
let ySpeedBall = 6;
let radius = diameter / 2;

//paddle variables

let paddleHeight = 90;
let paddleWidth = 10;
let xPaddle = 5;
let yPaddle = 150;

let hit = false;


//paddle 2

let xPaddle2 = 585;
let yPaddle2 = 150;
let yPaddle2Speed;


//score

let myPoints = 0
let yourPoints = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  displayBall();
  moveBall();
  checkCollide();
  createPaddle(xPaddle, yPaddle);
  movePaddle1();
  paddleTouch(xPaddle, yPaddle);
  createPaddle(xPaddle2, yPaddle2);
  movePaddle2();
  paddleTouch(xPaddle2, yPaddle2);
  includeScore();
  score();
  
}

function displayBall(){
  
  circle(xBall, yBall, diameter);
  
}

function moveBall(){
  
    xBall+= xSpeedBall;
    yBall += ySpeedBall;
  
}

function checkCollide (){
  
    
  if(xBall + radius > width || xBall - radius < 0){
    
    xSpeedBall *= -1;
    
  }
  
  if(yBall + radius > height || yBall - radius < 0){
    ySpeedBall *= -1;
  }
}
  
function createPaddle(x,y){
  
  rect(x, y, paddleWidth, paddleHeight)
}

function movePaddle1(){
  if(keyIsDown(UP_ARROW)){
    yPaddle -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yPaddle += 10;
  }
}

function paddleTouch(x,y){
  
 hit = collideRectCircle(x, y, paddleWidth, paddleHeight, xBall, yBall, radius)
  
  if(hit){
    xSpeedBall *= -1
  }
}

function movePaddle2(){
  
    if(keyIsDown(87)){
        yPaddle2 -= 10;
      }
      if(keyIsDown(83)){
        yPaddle2 += 10;
  
}
}

function includeScore(){
  textSize(16);
  textAlign(CENTER);
  fill(color(255,140, 0))
  rect(150, 10, 40, 20)
  fill(255)
  text(myPoints, 170, 26)
  fill(color(255,140, 0))
  rect(450, 10, 40, 20)
  fill(255)
  text(yourPoints, 470, 26)
}


function score(){
  if(xBall > 590){
    myPoints += 1
  }
  if(xBall < 10){
    yourPoints += 1
  }
}