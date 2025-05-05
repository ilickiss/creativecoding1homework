//board
let boardWidth = 400;
let boardHeight = 600;

//font
let pixelify;

//trilobite doodler
let doodlerWidth = 50;
let doodlerHeight = 50;
let doodlerX = 175;
let doodlerY = 500;
let doodlerImg;

//physics
let velocityX = 2;
let velocityY = 0; // doodler jump speed
let initialVelocityY = -8 // starting velocity
let gravity = 0.4;

//platforms
let platformArray = [];
let platformWidth = 70;
let platformHeight = 18;

//score
let score = 451;
let maxScore = 0;
let gameWon = false

// game over
let gameOver = false;


//load images
function preload (){
  doodlerImg = loadImage('trilobite.png');
  bg3 = loadImage ('cenozoic.png');
  bg2 = loadImage ('mesozoic.png');
  bg1 = loadImage ('paleozoic.png');
  pixelify = loadFont ('pixelfont.ttf')
}

//SetUpFunctions
function setup () {
  createCanvas (boardWidth, boardHeight);
  
  doodler = {
  img : ('trilobite.png'),
  x : doodlerX,
  y : doodlerY,
  width : doodlerWidth,
  height : doodlerHeight
    
  };
  velocityY = initialVelocityY;
  placePlatforms();
}
function draw () {
  
  //BACKGROUND
  //Backgrounds change with the time period=point value.
  
  if (score <= 65) {background(bg3);} //cenozoic
  
  else if (score <= 251) {background(bg2);}//mesozoic
  
else {background(bg1);}//paleozoic

  
  //TRILOBITE
  //trilobite image is the doodler in this doodlejump alike game
 //doodlerImage - IT WORKED
  image(doodlerImg, doodler.x,doodler.y)
  
  moveDoodler ();
  
//Doodler movement velocity
doodler.x += velocityX
  
  //return of the doodler (wrap around)
  if (doodler.x > 400) {doodler.x =0;
  }
  else if (doodler.x <= 0) {doodler.x = 400;}

velocityY += gravity;
doodler.y +=velocityY;
  
//GameOver!
  if (doodler.y > boardHeight) {
    gameOver = true}
                 
//Draw platforms
  for (let i = 0; i < platformArray.length; i++) {
    let platform = platformArray [i];
    fill ('grey');
    stroke('black')
    strokeWeight(3)
      rect(platform.x,platform.y,platform.width, platform.height);
    //move platforms down
    if (velocityY < 0 && doodler.y < boardHeight*3/4) {
      platform.y -= initialVelocityY;
    }
// Jump if collision
    if (detectCollision(doodler, platform) && velocityY >=0) {
      velocityY = initialVelocityY; //Jump!
      updateScore(); //update score when jumping
  }
 }
  while (platformArray.length > 0 && platformArray [0].y >= boardHeight) { platformArray.shift();
    newPlatform();
  }
  
//score - draw a score on screen
  textSize(20);
  fill('white');
  strokeWeight(0);
  text(score, 25, 50);
//MYA
  textSize (12)
  fill ('white');
  strokeWeight(0)
  text('MYA', 60 , 50)
  updateScore();
  
//Game Over Texts
  textFont(pixelify)
  textAlign (CENTER)
  fill ('yellow')
  strokeWeight (3)
  if (gameOver) {
    if (gameWon) {
      textSize (40);
      text ('You Won!!!', boardWidth/2, 250);
      textSize (20);
      text('Welcome to the Age of Mammals!', boardWidth/2, 300)
      text ('Press Space to Play Again!',boardWidth/2, 350);}
    else {
      textSize (30)
     text ('Game Over!')
      text (' Press Space to Restart', boardWidth/2, 300);}
  }  
  

  displayEra();
}
 // Time Era
function displayEra() {
textAlign ('RIGHT')
strokeWeight (3)
stroke ('black')
    
  if (score <65) {
textSize (35);
fill ('green')
text ('Cenozoic Era',boardWidth/3,50);
textAlign ('Right')
textSize (20)
strokeWeight (1)
text ('65-0 MYA', 250, 80);
  }
  else if (score < 251){
textSize (35);
fill ('orange')
text ('Mesozoic Era',boardWidth/3,50);
textAlign ('Right')
textSize (20)
strokeWeight (1)
text ('251-65 MYA', 250, 80);
  }
  else if (score <=541){
textSize (35);
fill ('pink')
text ('Paleozoic Era',boardWidth/3,50);
textAlign ('Right')
textSize (20)
strokeWeight (1)
text ('541-251 MYA', 250, 80);
  }
}


function moveDoodler () {
  if (keyIsDown(65)) {//A
    velocityX -= 1;
  } else if (keyIsDown(68)) { // D
    velocityX += 1;
  }
if (keyIsDown(32) && gameOver) {
  resetGame ();}
}

  //reset game - this is just everything at start position!
function resetGame () {
doodler ={
  x: doodlerX,
  y: doodlerY,
  width : doodlerWidth,
  height : doodlerHeight};
velocityX = 0;
velocityY = initialVelocityY;
score = 541;
gameOver = false;
gameWon = false;
placePlatforms ();
}
  
//PLATFORMS ARRAY
function placePlatforms () {
  platformArray =[];
  
  //starting platform
  let platform ={
    x : boardWidth/2.5,
    y : boardHeight - 50,
    width : platformWidth,
    height : platformHeight
  };
  
  platformArray.push(platform);
  
  for (let i=0; i < 6; i++) {
    let randomX = Math.floor (Math.random() *boardWidth*3/4);
  let platform ={
    x : randomX,
    y : boardHeight - 75 * i - 150,
    width : platformWidth,
    height : platformHeight
  };
  
  platformArray.push(platform);
}
}
  function newPlatform() {
    let randomX = Math.floor (Math.random() *boardWidth*3/4);
  let platform ={
    x : randomX,
    y : 0,
    width : platformWidth,
    height : platformHeight
  };
    platformArray.push(platform);
  }
  
//COLLISION DETECTION
  function detectCollision(a,b) {
  return a.x < b.x + b.width && //A box is violating B box's x boundaries no (overshoot)
    a.x + a.width > b.x && // A box is violating B box's x boundaries no (undershoot)
    a.y < b.y + b.height &&//A box is violating B box's x boundaries no (overshoot)
    a.y + a.height > b.y; //A box is violating B box's y boundaries no (undershoot)
  }

//SCORE POINTS
    function updateScore () {
      let points= Math.floor (3*Math.random());
      
      if (velocityY < 0) {
        score -= points;
        if (score <= 0) {
          score = 0
          gameWon = true;
          gameOver= true;
        }
      }
    }
//Reset function
