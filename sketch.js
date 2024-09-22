let bg, egg, blueEgg, clock, owln, desk, acorn, berries, hb;
let h, liz, owla1, owla2, owlh1, owlh2, rat, token;
let Clock;
var coin = 0;


function preload() {
    bg = loadImage("bg.png");
    egg = loadImage("egg.png");
    blueEgg = loadImage("blueEgg.png");
    clock = loadImage("clock.png");
    owln = loadImage("owl neutral.png");
    desk = loadImage("desk.png");
    acorn = loadImage("acorn.png");
    berries = loadImage("berries.png");
    hb = loadImage("heart broken.png");
    h = loadImage("heart.png");
    liz = loadImage("lizard.png");
    owla1 = loadImage("owl anger1.png");
    owla2 = loadImage("owl anger2.png");
    owlh1 = loadImage("owl happy1.png");
    owlh2 = loadImage("owl happy2.png");
    rat = loadImage("rat.png");
    var canvas;
}

function setup() {
    let aspectH = 9 * windowWidth/16;  
    Clock = new timer();
    canvas = createCanvas(windowWidth, aspectH);
    canvas.position(0, windowHeight/2 - (height/2));
    canvas.style('z-index', '-1');
    
    //noLoop();
}

function draw() {
    background(220);
    image(bg, 0, 0, width, height);
    
    image(owln,0,0,width,height);

    image(desk,0,0,width,height);
    
    //image(clock,0,0,width,height);
    Clock.show();

    image(egg,0, 0,width,height);

    image(blueEgg, 0, 0,width,height);

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