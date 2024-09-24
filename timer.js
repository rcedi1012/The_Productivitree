class timer{
    constructor() {
      this.x = windowWidth * 0.71;
      this.y = aspectH * 0.465;
      this.size = windowWidth * 0.03;
      this.opacity = 255;
      this.growx = windowWidth;
      this.growy = aspectH;
      this.xx = 0;
      this.yy = 0;
    }
  
    show() {
      noStroke();
      noFill();
      
      if (menuOpen === false) {
        image(clock,this.xx,this.yy,this.growx,this.growy);
      }
      ellipse(this.x, this.y, this.size *2);

      if (timerOpen === true) {
        fill(255, 255, 199, this.opacity);
        stroke(176, 65, 62,this.opacity);
        strokeWeight(windowWidth * 0.004);
        rect(windowWidth * 0.12, aspectH * 0.15, windowWidth * .65, windowWidth * .4, windowWidth * 0.004);

        noStroke();
        fill(176, 65, 62);
        textSize(windowWidth * 0.033);
        text("TIMER", windowWidth * 0.38, aspectH * 0.22);
        textSize(windowWidth * .18);
        text(time, windowWidth * 0.39, aspectH * 0.57)
        textSize(windowWidth * 0.033);
        text("    Press the up arrow key to add seconds\nand the down arrow key to subtract seconds,\n          then press enter to start the timer!", windowWidth * 0.14, aspectH * 0.7);
      }
    }
  
    clicked() {
      if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
        timerOpen = true;
      }
      else {
        timerOpen = false;
      }
    }

    grow() {

    }
  }

class owl { 
  constructor() {
    this.x = windowWidth * 0.87;
    this.y = aspectH * 0.42;
    this.xa = width;
    this.sizex = aspectH * 0.13;
    this.sizey = windowWidth * 0.2;
  }

  show() {
    noStroke();
    noFill();
    if (owlMeter === 0) {
      on = true;
      oa1 = false;
      oa2 = false;
      oh1 = false;
      oh2 = false;
    }
    else if ((owlMeter > 0) && (owlMeter <= 2)) {
      on = false;
      oa1 = false;
      oa2 = false;
      oh1 = true;
      oh2 = false;
    }
    else if ((owlMeter > 2) && (owlMeter <= 4)) {
      on = false;
      oa1 = false;
      oa2 = false;
      oh1 = false;
      oh2 = true;
    }
    else if ((owlMeter < 0) && (owlMeter >= -2)) {
      on = false;
      oa1 = true;
      oa2 = false;
      oh1 = false;
      oh2 = false;
    }
    else if ((owlMeter < -2) && (owlMeter >= -4)) {
      on = false;
      oa1 = false;
      oa2 = true;
      oh1 = false;
      oh2 = false;
    }
    if (on === true) {
      image(owln,0,0,width,height);
    }
    else if (oa1 === true) {
      image(owla1,0,0,width,height);
      image(hb,mouseX,mouseY,windowWidth * 0.03, windowWidth * 0.03);
    }
    else if (oa2 === true) {
      image(owla2,0,0,width,height);
      image(hb,mouseX,mouseY,windowWidth * 0.03, windowWidth * 0.03);
    }
    else if (oh1 === true) {
      image(owlh1,0,0,width,height);
      image(h,mouseX,mouseY,windowWidth * 0.03, windowWidth * 0.03);
    }
    else if (oh2 === true) {
      image(owlh2,0,0,width,height);
      image(h,mouseX,mouseY,windowWidth * 0.03, windowWidth * 0.03);
    }
  }
}

class egg {
  constructor() {
    this.x = windowWidth * 0.23;
    this.y = aspectH * 0.31;
    this.sizex = aspectH * 0.35;
    this.sizey = windowWidth * 0.24;
    this.size = windowWidth * 0.24;
  }

  show() {
    noStroke();
    noFill();
    image(eggI,0,0,width,height);
    ellipse(this.x, this.y, this.sizex, this.sizey);
  }

  clicked() {
    if ((dist(mouseX, mouseY, this.x, this.y) < this.size) && (money > 0)) {
      money -= 1;
      critter2 = round(random(1,4));
      if (critter2 === 1) {
        rCount += 1;
      }
      else if (critter2 === 2) {
        bCount += 1;
      }
      else if (critter2 === 3) {
        lCount += 1;
      }
      else {
        aCount +=1;
      }
    }
  }

}

class begg {
  constructor() {
    this.x = windowWidth * 0.51;
    this.y = aspectH * 0.31;
    this.sizex = aspectH * 0.35;
    this.sizey = windowWidth * 0.24;
    this.size = windowWidth * 0.24;
  }

  show() {
    noStroke();
    noFill();
    image(blueEgg,0,0,width,height);
    ellipse(this.x, this.y, this.sizex, this.sizey);
  }

  clicked() {
    if ((dist(mouseX, mouseY, this.x, this.y) < this.size) && (money > 1)) {
      money -= 2;
      critter = round(random(1,2));
      if (critter === 1) {
        rCount += 1;
      }
      else {
        bCount += 1;
      }
    }
  }

}

class token {
  constructor() {
    this.x = windowWidth * 0.88;
    this.y = aspectH * 0.96;
  }

  show() {
    fill(255, 255, 199);
    textSize(windowWidth * 0.06);
    image(coin,0,0,width,height);
    text(money ,this.x, this.y);
  }

}

class menu {
  constructor() {
    this.x1 = windowWidth * 0.12;
    this.y1 = aspectH * 0.85;
    this.y2 = aspectH * 0.15;
    this.sizex = windowWidth * 0.65;
    this.sizey = windowWidth * 0.40;
    this.opacity = 0;
  }

  show() {
    fill(176, 65, 62);
    stroke(255, 255, 199);
    strokeWeight(windowWidth * 0.004);
    rect(this.x1, this.y1, this.sizex, this.sizey, windowWidth * 0.004);
    
    textSize(windowWidth * 0.06);
    fill(255, 255, 199);
    noStroke();
    textFont('Times New Roman');
    text("Gifts", windowWidth * 0.37,this.y1);

    fill(255, 255, 199, this.opacity);
    textSize(windowWidth * 0.03);
    text("x" + aCount,this.x1 * 1.8,this.y1 * 3.2);
    text("x" + bCount,this.x1 * 1.8,this.y1 * 5.4);
    text("x" + lCount,this.x1 * 5.2,this.y1 * 3.2);
    text("x" + rCount,this.x1 * 5.2,this.y1 * 5.54);
    text("1",this.x1 * 1.3,this.y1 * 2.45);
    text("2",this.x1 * 6.,this.y1 * 2.45);
    text("3",this.x1 * 1.3,this.y1 * 4.9);
    text("4",this.x1 * 6,this.y1 * 4.9);

    if (imageShow == true) {
      image(acorn, this.x1 * -3.5, this.y2 * -0.5,width * 1.3,height * 1.3);
      image(berries,this.x1 * -3.5, this.y2 * 2,width * 1.3,height * 1.3);
      image(liz,this.x1 * -0.1, this.y2 * -0.5,width * 1.3,height * 1.3);
      image(rat,this.x1 * -0.1, this.y2 * 1.85,width * 1.3,height * 1.3);
      textSize(windowWidth * 0.03);
      text("Press 1, 2, 3, \nor 4 to give \nOwl a gift!",windowWidth * 0.37, aspectH * 0.45);
    }

  }

  clicked() {
    if ((mouseX > this.x1) && (mouseX < this.x1+this.sizex) &&
    (mouseY > this.y1) && (mouseY < this.y1+this.sizey)) {
      imageShow = true;
      menuOpen = true;
    }
    else {
      menuOpen = false;
      imageShow = false;
      this.y1 = aspectH * 0.85;
    }
  }

  open() {   
    if (menuOpen == true) {
      this.y1 = this.y2;
      this.opacity = 255;
    }

  }

  hover() {
    if ((mouseX > this.x1) && (mouseX < this.x1+this.sizex) &&
    (mouseY > this.y1) && (mouseY < this.y1+this.sizey)) {
      hov = true;
    }
    else {
      hov = false;
    }
  }

  anim() {
    if (this.y1 > aspectH * 0.8 && hov === true) {
      this.y1 -= 5;
    }
    else if (hov === false && this.y1 < aspectH * 0.85){
        this.y1 += 5;
      
    }
  }
}