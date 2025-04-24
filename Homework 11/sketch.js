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
let circleX = 300;  // Starting position for the circle
let circleY = 100;  // Starting position for the circle
let circleSpeed = 5; // Speed for circle movement

// FUNCTION SETUP *_+_*<3*_+_*
function setup() {
  createCanvas(800, 600);
}

// DRAW
function draw() {
  background(0);

  // Player
  fill("lightblue");
  circle(x, y, diameter);

  // Obstacle Square
  fill(30, 200, 29);
  square(squareX, squareY, 55);

  // Obstacle Circle
  fill(200, 50, 50); // Red color for circle
  ellipse(circleX, circleY, 55, 55); // Draw the circle

  // Exit boxes
  fill("grey");
  rect(450, 490, 400, 40);
  rect(0, 490, 300, 40);

  // Exit text
  fill("yellow");
  textSize(22);
  noStroke();
  text("exit", 360, 570);

  // Win Text
  if (gameWon) {
    textSize(33);
    fill("green");
    noStroke();
    textAlign(CENTER);
    text("You Won!", width / 2, height / 2);
  }

  // Mouse position
  fill(255);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);

  // Clicker obstacle
  fill("red");
  circle(mousex, mousey, 50);

  // Obstacle Movement for Square
  squareX += random(0, 10);
  squareY += ySpeed;
  if (squareY >= 450 || squareY <= 0) {
    ySpeed *= -1; // bounce
  }

  if (squareX > 800) {
    squareX = 0;
  }

  // Obstacle Movement for Circle (same logic as the square)
  circleX += random(0, 10);  // Random movement in the x-direction
  circleY += circleSpeed;  // Constant speed in the y-direction
  
  if (circleY >= 450 || circleY <= 0) {
    circleSpeed *= -1; // bounce
  }

  if (circleX > 800) {
    circleX = 0;
  }

  // Player Movement
  if (y > 490 && x >= 330 && x <= 450) {
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

  if (keyIsDown(83)) { // S
    y += 10;
  } else if (keyIsDown(87)) { // W
    y -= 10;
  }

  if (y > 465 && !(x >= 330 && x <= 450)) {
    y = 465;
  }

  if (keyIsDown(65)) { // A
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
