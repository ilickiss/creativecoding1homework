//Ingrid Lickiss final project
//canvas
let canvasWidth = 400;
let canvasHeight = 600;

//font
let pixelify;

//trilobite
let trilobiteWidth = 50;
let trilobiteHeight = 50;
let trilobiteX = 175;
let trilobiteY = 500;
let trilobiteImg;

//physics
let velocityX = 0
let velocityY = 0; // trilobite jump speed
let initialVelocityY = -8 // starting velocity
let gravity = 0.4;

//platforms
let platformArray = [];
let platformWidth = 70;
let platformHeight = 18;

//score
let score = 541;
let maxScore = 0;
let gameWon = false

// game over
let gameOver = false;

//sound (background music)
let backgroundMusic;


//load images
function preload (){
  trilobiteImg = loadImage('trilobite.png');
  bg3 = loadImage ('cenozoic.png'); //cenozoic BG
  bg2 = loadImage ('mesozoic.png');//mesozoic BG
  bg1 = loadImage ('paleozoic.png');//paleozoic BG
//font
  pixelify = loadFont ('pixelfont.ttf');
//music
  backgroundMusic = loadSound ('relax.mp3'); //BG Music
}

//SetUpFunctions
function setup () {
  createCanvas (canvasWidth, canvasHeight);
  //music
  playBackgroundMusic ();
  
  trilobite = {
  img : ('trilobite.png'),
  x : trilobiteX,
  y : trilobiteY,
  width : trilobiteWidth,
  height : trilobiteHeight
    
  };
  velocityY = initialVelocityY;
  placePlatforms();
}

playBackgroundMusic ();
//background music
function playBackgroundMusic () {
  userStartAudio ();
  backgroundMusic.loop ();
  backgroundMusic.setVolume (.03);
}
function draw () {
  //BACKGROUND
  //Backgrounds change with the time period=point value.
  
  if (score <= 65) {background(bg3);} //cenozoic
  
  else if (score <= 251) {background(bg2);}//mesozoic
  
else {background(bg1);}//paleozoic

  
  //TRILOBITE
  //trilobite image is the doodlejumper in this doodlejump alike game
 //trilobiteImage - IT WORKED
  image(trilobiteImg, trilobite.x,trilobite.y)
  
  moveTrilobite ();
  
//Trilobite movement velocity
trilobite.x += velocityX
  
  //return of the trilobite (wrap around)
  if (trilobite.x > 400) {trilobite.x =0;
  }
  else if (trilobite.x <= 0) {trilobite.x = 400;}

velocityY += gravity;
trilobite.y +=velocityY;

//GameOver!
  if (trilobite.y > canvasHeight) {
    gameOver = true}
                 
//Draw platforms
  for (let i = 0; i < platformArray.length; i++) {
    let platform = platformArray [i];
    fill ('grey');
    stroke('black')
    strokeWeight(3)
      rect(platform.x,platform.y,platform.width, platform.height);
    //move platforms down
    if (velocityY < 0 && trilobite.y < canvasHeight*3/4) {
      platform.y -= initialVelocityY;
    }
// Jump if collision
    if (detectCollision(trilobite, platform) && velocityY >=0) {
      velocityY = initialVelocityY; //Jump!
      updateScore(); //update score when jumping
  }
 }
  while (platformArray.length > 0 && platformArray [0].y >= canvasHeight) { platformArray.shift();
    newPlatform();
  }

//score - draw a score on screen
  textSize(30);
  fill('white');
  strokeWeight(0);
  text(score, 25, 50);
//MYA
  textSize (20)
  fill ('white');
  strokeWeight(0)
  text('MYA',80 , 50)
  updateScore();
  
//Game Over Texts
  textFont(pixelify)
  textAlign (CENTER)
  fill ('yellow')
  strokeWeight (3)
  if (gameOver) {
    if (gameWon) {
      textSize (40);
      text ('You Won!!!', canvasWidth/2, 250);
      textSize (20);
      text('Welcome to the Age of Mammals!', canvasWidth/2, 300)
      text ('Press SPACE to Play Again!',canvasWidth/2, 350);}
    else {
      textSize (40)
     text ('Game Over!',canvasWidth/2, 250)
      textSize (30)
      text (' Press SPACE to Restart', canvasWidth/2, 300);
    textSize (20)
     text ('Can you survive to the Present?',canvasWidth/2, 330);
    text ('move your Trilobite', canvasWidth/2, 360);
      text ('LEFT with key A', canvasWidth/2, 380);
    text ('RIGHT with key D', canvasWidth/2, 400);
  }  
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
text ('Cenozoic Era',canvasWidth/3,50);
textAlign ('Right')
textSize (25)
strokeWeight (1)
text ('65-0 MYA', 250, 80);
  }
  else if (score < 251){
textSize (35);
fill ('orange')
text ('Mesozoic Era',canvasWidth/3,50);
textAlign ('Right')
textSize (25)
strokeWeight (1)
text ('251-65 MYA', 250, 80);
  }
  else if (score <=541){
textSize (35);
fill ('pink')
text ('Paleozoic Era',canvasWidth/3,50);
textAlign ('Right')
textSize (25)
strokeWeight (1)
text ('541-251 MYA', 250, 80);
  }
}


function moveTrilobite () {
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
trilobite ={
  x: trilobiteX,
  y: trilobiteY,
  width : trilobiteWidth,
  height : trilobiteHeight};
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
    x : canvasWidth/2.5,
    y : canvasHeight - 50,
    width : platformWidth,
    height : platformHeight
  };
  
  platformArray.push(platform);
  
  for (let i=0; i < 6; i++) {
    let randomX = Math.floor (Math.random() *canvasWidth*3/4);
  let platform ={
    x : randomX,
    y : canvasHeight - 75 * i - 150,
    width : platformWidth,
    height : platformHeight
  };
  
  platformArray.push(platform);
}
}
  function newPlatform() {
    let randomX = Math.floor (Math.random() *canvasWidth*3/4);
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
