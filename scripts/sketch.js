let bg;
let egg;
let clock;
let Clock;
let owl;
var cnv;
var coin = 0;


function centerCanvas() {
  var cx = (windowWidth - width) / 2;
  var cy = (windowHeight - height) / 2;
  cnv.position(cx, cy);
}

function preload() {
    bg = loadImage("images/library.jpg");
    egg = loadImage("images/egg.png");
    clock = loadImage("images/clock.png");
    owl = loadImage("images/owl.png");
}

function setup() {
    Clock = new timer();
    cnv = createCanvas((windowWidth/1.78),(windowHeight/1.78));
    centerCanvas();
    noLoop();
}

function draw() {
    background(220);
    image(bg, 0 ,0,windowWidth/1.78,windowHeight/1.78);
    
    image(owl,width - 300,50);
    
    image(clock,450,height/2-25,150,150);
    Clock.show();

    image(egg,250,160,150,200);
    
    fill(105, 56, 17);
    rect(0, height-100, width, height/2);

    text("x" + mouseX, 300, 300);
    text("y" + mouseY, 300, 200);
    
  }


  function mousePressed() {
    Clock.clicked();
  }

  function windowResized() {
    centerCanvas();
    resizeCanvas((windowWidth/1.78),(windowHeight/1.78));
  }