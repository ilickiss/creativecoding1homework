//Assignment 14 EXC - Ingrid Lickiss
// Player
let x = 50;
let y = 50;
let diameter = 50;

// Clicker obstacle
let mousex = 0;
let mousey = 0;

// Win condition
let gameWon = false;

//Updated Obstacle Arrays
//you have to make them plural or it confuses the computer*TheMoreYouKnOw
// Square obstacle
let squares = [];
// Circle obstacle
let circles = [];
//Rectangle obstacle
let rects = [];

//Okay, let's try to add some Class

//CLASS**********************************************************
//Square Class Attempt
class SquareObstacle 
{ //Class open
    constructor (x, y, size, color)
  {//constructor open
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speed = random(1,5);
  }//constructor close
  

  //now we want to display it with a function
  display ()
  {//display open
    fill (this.color);
   square (this.x, this.y, this.size);
  }//display close
  
  //One more, we want it to move! Random movement. This is going to replace our draw movement function.
  movement ()
{
    this.x += random(2,8)
    this.y += this.speed;
//keep the if statement bit change the array to class
 if (this.y >= 450 || this.y <= 0) 
   {
  this.speed *= -1; 
   }
// same thing for 
//bounce
    if (this.x > 800) 
      {
   this.x = 0;
      }
}
}//class close

// ONE MORE TIME*************************************

//Circle Class Attempt
class CircleObstacle
{//class open
  constructor(x, y, diameter, color ) 
  {//constructor open
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;
    this.speed = random(1,5)
  }//constructor close
  //now we want to display it with a function
  display ()
  {//display open
    fill (this.color);
   ellipse (this.x, this.y, this.diameter);
  }//display close
  
  movement ()
{
    this.x += random (0,10)
    this.y += this.speed;
//keep the if statement bit change the array to class
 if (this.y >= 450 || this.y <= 0) 
   {
  this.speed *= -1; 
   } 
//bounce
    if (this.x > 800) 
      {
    this.x = 0;
      }
}
}//class close

//Rectangle Class ************************************************
class RectangleObstacle 
{ //Class open
    constructor (x, y, size, height, color)
  {//constructor open
    this.x = x;
    this.y = y;
    this.size = size;
    this.height = height;
    this.color = color;
    this.speed = random(1,5);
  }//constructor close
  

  //now we want to display it with a function
  display ()
  {//display open
    fill (this.color);
   rect (this.x, this.y, this.size, this.height);
  }//display close
 
  movement ()
{
    this.x += random (0,10)
    this.y += this.speed;
//keep the if statement bit change the array to class
 if (this.y >= 450 || this.y <= 0) 
   {
  this.speed *= -1; 
   }
// same thing for 
//bounce
    if (this.x > 800) 
      {
   this.x = 0;
      }
}
}//class close

// SETUP *************************************************
function setup() {
  createCanvas(800, 600);
  
//Set up for obstacles
  //I had to reference chat GPT for this i could not understand how to do this. New creates a new object and helps store it in your array. Here we add the value just like we did when making arrays, but give it the class to reference back to.
  
  //I'm a little lost still, but trying my best to figure it out. The dog examples werent super helpful and kinda pissed me off. Im trying really hard to learn here.
  //SquareObstacles
  squares [0] = new SquareObstacle (random(800), random (450), 55, "blue");
  squares [1] = new SquareObstacle (random(800), random (450), 55, "blue");
  squares [2] = new SquareObstacle (random(800), random (450), 55, "blue");
  
  circles [0] = new CircleObstacle (random(800), random (450), 55, "yellow");
  circles [1] = new CircleObstacle (random(800), random (450), 55, "yellow");
  circles [2] = new CircleObstacle (random(800), random (450), 55, "yellow");
  
  rects [0] = new RectangleObstacle (random(800), random (450), 55, 60, "pink");
  rects [1] = new RectangleObstacle (random(800), random (450), 55, 60, "pink");
  rects [2] = new RectangleObstacle (random(800), random (450), 55, 60, "pink");
}
  
// DRAW************************************************************
function draw() {
  background(0);
  drawPlayer ();
  drawObstacles ();
  drawPlayerMovement ();
  drawExit ();
  drawVictory ();
  drawClickobstacle ();
  drawBorder ();
  // adding function for Display - nevermind I guess you dont do that
}

//Square movement and display info
function drawObstacles () {
        for(let i = 0; i < squares.length; i++)
        {
            squares [i].movement ();
            squares [i].display ();
        }
   for(let i = 0; i < circles.length; i++)
        {
            circles [i].movement ();
            circles [i].display ();
        }
   for(let i = 0; i < rects.length; i++)
        {
            rects [i].movement ();
            rects [i].display ();
        }
    }
  // Player XX
  function drawPlayer () 
{fill("lightblue");
  circle(x, y, diameter);}

  // Exit boxesXX
  function drawExit () {fill("grey");
  rect(450, 490, 400, 40);
  rect(0, 490, 300, 40);

  // Exit text
  fill("yellow");
  textSize(22);
  noStroke();
  text("exit", 360, 570);}

  // Win Text
  function drawVictory () { if (gameWon) {
    textSize(33);
    fill("green");
    noStroke();
    textAlign(CENTER);
    text("You Won!", width / 2, height / 2);
  }}
  
  // Clicker obstacle
  function drawClickobstacle () {fill("red");
  circle(mousex, mousey, 50);}

  // Player Movement
  function drawPlayerMovement ()
{
  if (y > 490 && x >= 330 && x <= 450) 
  {
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
