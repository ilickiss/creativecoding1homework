//VARIABLES
//PETALS
var petalx = 0
var petaly = 0

var petalx2 = 50
var petaly2 =0

var petalx3= 200
var petaly3=0

var petalx4= 0
var petaly4=60
//HAIR
var squarex = 150
var speedx = 2

//NECK
var neckx= 230
var speedx1= 1
    
//HEAD
var headY = 180
var speedy = 1;

//SHOULDER
var shoulderY = 400
var speedy2 = 1;

//TEXT
var size = 22;
var count = 0;
var sizeDirection = 2;

var movement;

function setup()
{
    createCanvas(800,600);
    movement = floor(random() * 10) + 1;
}

function setup() {
    // create a canvas that is 400x400 pixels.
    // and 400 pixels high
    createCanvas(400, 400);
  }
//DRAW ELEMENTS
  function draw() {
    //make some freaking random numbers for goodness sake
    
    
    //draw a light blue background
    background(135, 206, 235);
    
    //FLOWERS
    //petal fubuki
    petalx+= 10;
    petaly+= 10;
    
    petalx2+= 5
    petaly2+= 5
    
    petaly3+= 5
    petalx3+= 5
    
    petaly4+= 5
    petalx4+= 5
    
    stroke ("white");
    point(petalx, petaly);
    point(petalx2, petaly2);
    point(petalx3, petaly3);
    point(petalx4, petaly4);
    point(90, 60);
    point(200, 20);
    point(30, 200);
    point(80, 280);
    point(30, 360);
    //Sakura
     textSize(40)
    text("🌸", 50, 250)
    text("🌸", 80, 150)
    
    //HAIR back
    //top circle
    fill("#CCB367");
    stroke ("#CCB367");
    strokeWeight (5);
    circle (250, 170, 200);
    //rectangle
    fill("#CCB367");
    stroke ("#CCB367");
    strokeWeight (5);
    square (150, 180, 200);
    square (squarex, 200, 200);
     squarex = squarex + movement;
  
    if (squarex > 200) {
      speedx= -movement;
    }
    if (squarex  < 120) {
      speedx = -movement;
    }
    
    //NECK
    fill ("rgb(233,196,150)");
    strokeWeight (0);
    rect(neckx, 230,50,150);
    neckx = neckx + speedx1;
    if (neckx > 180) {
      speedx1 = -speedx1;
    }
    if (neckx  < 240) {
      speedx1 = -speedx1;
    }
    
    //HEAD
    fill ("rgb(255,227,192)");
    stroke ("rgb(255,227,192)");
    strokeWeight (5);
    ellipse (240, headY, 150, 170);
    headY = headY + speedy;
    if (headY > 190) {
      speedy = -speedy;
    }
    if (headY  < 180) {
      speedy = -speedy;
    }
    //TORSO
    //shoulders
    fill ("rgb(199,198,198)");
    stroke ("rgb(134,133,132)");
    strokeWeight (5);
    ellipse (250, shoulderY, 210,     160);
    shoulderY = shoulderY + speedy2;
    if (shoulderY > 400) {
      speedy2 = -speedy2;
    }
    if (shoulderY  < 470) {
      speedy2 = -speedy2;
    }
    
    
    //FACE
    //eyes
    fill ("rgb(124,162,158)");
    stroke ("rgb(107,134,131)");
    strokeWeight (2);
    ellipse (200, 180, 30, 40)
    ellipse (265, 180, 30, 40)
    fill ("black");
    //blush
     fill ("pink");
    strokeWeight (0);
    ellipse (195, 210, 30, 20)
    ellipse (270, 210, 30, 20)
    //nose
    fill ("rgb(233,196,150)");
    stroke ("rgb(233,196,150)");
    strokeWeight (5);
    triangle(225, 220, 232, 180, 240, 220);
    //mouth
    stroke ("black");
    strokeWeight (5);
    line(210, 235, 260, 230);
    
     //TEXT
    //Title
    fill ("pink")
    textSize(22)
    stroke('rgb(103,151,177)')
    strokeWeight (3)
      text("It is Springtime.",20 ,80);
    //Signature
    fill ("pink")
    textSize(size)
    stroke ('rgb(103,151,177)')
    strokeWeight (5)
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 2;
    }
      text("Ingrid Lickiss",200 ,370);
  }