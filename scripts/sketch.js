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
    let Clock = new timer();
    cnv = createCanvas((windowWidth/1.78),(windowHeight/1.78));
    centerCanvas();
}

function draw() {
    background(220);
    image(bg, 0 ,0);
    image(owl,width - 300,50);
    image(clock,450,height/2-25);
    image(egg,250,160);
    rect(0, height-100, width, height/2);
    fill(105, 56, 17);
    bg.resize(windowWidth/1.78,windowHeight/1.78);
    clock.resize(150,150);
    egg.resize(150,200);
    //chbox.display();
  }

  function mousePressed() {
    chbox.clicked();
  }

  function windowResized() {
    centerCanvas();
    resizeCanvas((windowWidth/1.78),(windowHeight/1.78));
  }