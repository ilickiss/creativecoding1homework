function setup() {
    // create a canvas that is 400x400 pixels.
    // and 400 pixels high
    createCanvas(400, 400);
  }
  
  function draw() {
    background(135, 206, 235);
    
    //FLOWERS
    //petals
    stroke ("white");
    point(30, 20);
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
    square (150, 200, 200);
    
    //NECK
    fill ("rgb(233,196,150)");
    strokeWeight (0);
    rect(233, 233,50,150);
    
    
    //HEAD
    fill ("rgb(255,227,192)");
    stroke ("rgb(255,227,192)");
    strokeWeight (5);
    ellipse (240, 180, 150, 170);
    
  
    //TORSO
    //shoulders
    fill ("rgb(199,198,198)");
    stroke ("rgb(134,133,132)");
    strokeWeight (5);
    ellipse (250, 400, 210, 160);
    
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
    textSize(22)
    stroke ('rgb(103,151,177)')
    strokeWeight (5)
      text("Ingrid Lickiss",250 ,370);
    
  }