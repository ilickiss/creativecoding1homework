//Assignment 12 - Ingrid Lickiss
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
let squareX = 50;
let squareY = 50;
let ySpeed = 10;

// Circle obstacle
let circleX = 300;
let circleY = 100;
let circleSpeed = 5;

// FUNCTION SETUP *_+_*<3*_+_*
function setup() {
  createCanvas(800, 600);
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
  
  // Player XX
  function drawPlayer () {fill("lightblue");
  circle(x, y, diameter);}

  //Obstacles XX
   function drawObstacles () {// Obstacle Square
  fill("blue");
  square(squareX, squareY, 55);

  // Obstacle CircleXX
  fill("yellow");
  ellipse(circleX, circleY, 55, 55);}

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
  function drawObstaclemovement () {// Square Obstacle Movement
  squareX += random(0, 10);
  squareY += ySpeed;
  if (squareY >= 450 || squareY <= 0) {
    ySpeed *= -1; // bounce
  }

  if (squareX > 800) {
    squareX = 0;
  }

  // Circle Obstacle Movement
  circleX += random(0, 10);
  circleY += circleSpeed;
  
  if (circleY >= 450 || circleY <= 0) {
    circleSpeed *= -1; // bounce
  }

  if (circleX > 800) {
    circleX = 0;
  }}
  

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
  }}
  
}

// Mouse Click Obstacle
function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}

//Border
  function drawBorder ()
  {noFill()
  strokeWeight(12)
  stroke("grey")
  rect(0, 0, 800, 600)
  noStroke()}
