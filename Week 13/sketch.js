//Assignment 13 EXC - Ingrid Lickiss
// Player
let x = 50;
let y = 50;
let diameter = 50;

// Clicker obstacle
let mousex = 0;
let mousey = 0;

// Win condition
let gameWon = false;

// Square obstacle
let squareX = [];
let squareY = [];
let squareSpeed = [];

// Circle obstacle
let circleX = [];
let circleY = [];
let circleSpeed = [];

// FUNCTION SETUP *_+_*<3*_+_*
function setup() {
  createCanvas(800, 600);
  
//Loop for obstacles
  
  //Loop for square obstacles?
  for (var i = 0; i < 5; i++)
  //Square
 { squareX[i] = getRandomNumber(800);
  squareY[i] = getRandomNumber(400);
  squareSpeed[i] = getRandomNumber(7);}
  
  //Tentative loop for circle if square works
  //Circle
   for (var i = 0; i < 4; i++)
 {circleX[i] = getRandomNumber(800);
  circleY[i] = getRandomNumber(400);
  circleSpeed[i] = getRandomNumber(20);
}
}
// DRAW
function draw() {
  background(0);
  drawPlayer ()
  drawObstacles ()
  drawPlayerMovement ()
  drawExit ()
  drawVictory ()
  drawClickobstacle ()
  drawObstaclemovement ()
  drawBorder ()
}
  // Player XX
  function drawPlayer () 
{fill("lightblue");
  circle(x, y, diameter);
                         }

  //Obstacles
   function drawObstacles () {
 // Obstacle Square
     //array attempted
  fill("blue");
     for(var i = 0; i < squareX.length; i++)
      
 { square(squareX[i], squareY[i], 55);}
     

  // Obstacle CircleXX
  fill("yellow");
     for(var i = 0; i < circleX.length; i++)
 { ellipse(circleX[i], circleY[i], 55, 55);}}

  // Exit boxesXX
  function drawExit () {fill("grey");
  rect(450, 490, 400, 40);
  rect(0, 490, 300, 40);

  // Exit textXX
  fill("yellow");
  textSize(22);
  noStroke();
  text("exit", 360, 570);}

  // Win TextXX
  function drawVictory () { if (gameWon) {
    textSize(33);
    fill("green");
    noStroke();
    textAlign(CENTER);
    text("You Won!", width / 2, height / 2);
  }}
  
  // Clicker obstacleXX
  function drawClickobstacle () {fill("red");
  circle(mousex, mousey, 50);}

  //Obstacles MovementXX
     
// Square Obstacle Movement
  function drawObstaclemovement () {
    
for (let i = 0; i < squareX.length; i++) {
  squareX[i] += random(0, 10);
  squareY[i] += squareSpeed[i];
  
  if (squareY[i] >= 450 || squareY[i] <= 0) {
    squareSpeed[i] *= -1; }
    
// bounce
  if (squareX[i] > 800) {
    squareX[i] = 0;
  }
}

  // Circle Obstacle Movement
  for (let i = 0; i < circleX.length; i++) {
  circleX[i] += random(0, 10);
  circleY[i] += circleSpeed[i];
  
  if (circleY[i] >= 450 || circleY[i] <= 0) {
    circleSpeed[i] *= -1; 
  }
// bounce
  if (circleX[i] > 800) {
    circleX[i] = 0;}
  }
}
  

  // Player MovementXX
  function drawPlayerMovement () {if (y > 490 && x >= 330 && x <= 450) {
    gameWon = true;
  }

  if (x >= 800) {
    x = 0;
  } else if (x <= 0) {
    x = 800;
  }

  if (y <= 0) {
    y = 0;
  } else if (y >= 600) {
    y = 0;
  }

  if (keyIsDown(83)) {
    y += 10;
  } else if (keyIsDown(87)) {
    y -= 10;
  }

  if (y > 465 && !(x >= 330 && x <= 450)) {
    y = 465;
  }

  if (keyIsDown(65)) {
    x -= 10;
  } else if (keyIsDown(68)) { // D
    x += 10;
  }
  
}

// Mouse Click Obstacle
function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}

//Random Number
function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }

//Border
  function drawBorder ()
  {noFill()
  strokeWeight(12)
  stroke("grey")
  rect(0, 0, 800, 600)
  noStroke()}
