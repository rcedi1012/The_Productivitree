let bg, eggI, blueEgg, clock, owln, desk, acorn, berries, hb;
let h, liz, owla1, owla2, owlh1, owlh2, rat, coin;
let Clock, Owl, Egg, Begg, Token, Menu;
let aspectH;
let stopwatch;
var coinNum = 0;
let mClick;
let aCount;
let bCount;
let lCount;
let rCount;
let menuOpen;
let timerOpen;
let time;
let imageShow;
let owlMeter;
let on, oa1, oa2, oh1, oh2;

function preload() {
    bg = loadImage("bg.png");
    eggI = loadImage("egg.png");
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
}

function setup() {
    aspectH = 9 * windowWidth/16;
    Clock = new timer();
    Owl = new owl();
    Egg = new egg();
    Begg = new begg();
    Token = new token();
    Menu = new menu();
    aCount = 0;
    bCount = 0;
    lCount = 0;
    rCount = 0;
    time = 0;
    menuOpen = false;
    imageShow = false;
    on = true;
    oa1 = false;
    oa2 = false;
    oh1 = false;
    oh2 = false;
    owlMeter = 0;
    canvas = createCanvas(windowWidth, aspectH);
    canvas.position(0, windowHeight/2 - (height/2));
    canvas.style('z-index', '-1');
    
    //noLoop();
}

function draw() {
    background(220);
    image(bg, 0, 0, width, height);
    
    Owl.show();

    image(desk,0,0,width,height);
    
    Clock.show();

    image(eggI,0, 0,width,height);

    image(blueEgg, 0, 0,width,height);

    fill(0);

    text("x" + round((mouseX * 100)/windowWidth) + "%", 300, 200);
    text("y" + round((mouseY * 100)/aspectH) + "%", 300, 210);
    
    Menu.open();
    Menu.show();

  }

  function mousePressed() {
    Clock.clicked();
    Menu.clicked();
    Owl.clicked();
  }

  function keyPressed () {
    if (menuOpen === true) {
    if ((key === "1") && (aCount > 0)) {
      aCount -= 1;
      owlMeter -= 1;
    }
    else if ((key === "2") && (bCount > 0)) {
      bCount -= 1;
      owlMeter -= 2;
    }
    else if ((key === "3") && (lCount > 0)) {
      lCount -= 1;
      owlMeter += 1;
    }
    else if ((key === "4") && (rCount > 0)) {
      rCount -= 1;
      owlMeter += 2;
    }
   }

   if (timerOpen === true) {
    if (keyCode === ArrowUp) {
      time += 1;
    }
    else if ((keyCode === ArrowDown) && (time > 0)) 
      time -= 1;
   }
   else if ((keyCode === ENTER) && (time > 0)) {
    if ((frameCount % 60 == 0) && (time > 0)) { 
      time --;
    }
   }
  }

  function windowResized() {
    centerCanvas();
    resizeCanvas((windowWidth/1.78),(windowHeight/1.78));
  }