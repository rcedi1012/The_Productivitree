class timer{
    constructor() {
      this.x = windowWidth * 0.71;
      this.y = aspectH * 0.465;
      this.size = windowWidth * 0.03;
    }
  
    show() {
      noStroke();
      noFill();
      image(clock,0,0,width,height);
      ellipse(this.x, this.y, this.size *2);
    }
  
    clicked() {
      mClick = 1;
      if (dist(mouseX, mouseY, this.x, this.y) < this.size && mClick === 1) {
        ellipse(200,200,200);
        stopwatch = true;
      }
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
    }
    else if (oa2 === true) {
      image(owla2,0,0,width,height);
    }
    else if (oh1 === true) {
      image(owlh1,0,0,width,height);
    }
    else if (oh2 === true) {
      image(owlh2,0,0,width,height);
    }
  }
}

class egg {
  constructor() {
    this.x = windowWidth * 0.71;
    this.y = aspectH * 0.465;
    this.size = windowWidth * 0.03;
  }

  show() {
    noStroke();
    noFill();
    image(clock,0,0,width,height);
    ellipse(this.x, this.y, this.size *2);
  }

  clicked() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
      ellipse(200,200,200);
      stopwatch = true;
    }
  }

}

class begg {
  constructor() {
    this.x = windowWidth * 0.71;
    this.y = aspectH * 0.465;
    this.size = windowWidth * 0.03;
  }

  show() {
    noStroke();
    noFill();
    image(clock,0,0,width,height);
    ellipse(this.x, this.y, this.size *2);
  }

  clicked() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
      ellipse(200,200,200);
      stopwatch = true;
    }
  }

}

class token {
  constructor() {
    this.x = windowWidth * 0.71;
    this.y = aspectH * 0.465;
    this.size = windowWidth * 0.03;
  }

  show() {
    noStroke();
    noFill();
    image(clock,0,0,width,height);
    ellipse(this.x, this.y, this.size *2);
  }

  clicked() {
    mClick
    if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
      ellipse(200,200,200);
      stopwatch = true;
    }
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
    
    textSize(40);
    fill(255, 255, 199);
    noStroke();
    textFont('Times New Roman');
    text("Gifts", windowWidth * 0.37,this.y1);

    fill(255, 255, 199, this.opacity);
    textSize(20);
    text("x" + aCount,this.x1 * 1.8,this.y1 * 3.2);
    text("x" + bCount,this.x1 * 1.8,this.y1 * 5.4);
    text("x" + lCount,this.x1 * 5.2,this.y1 * 3.2);
    text("x" + rCount,this.x1 * 5.2,this.y1 * 5.54);

    if (imageShow == true) {
      image(acorn, this.x1 * -3.5, this.y2 * -0.5,width * 1.3,height * 1.3);
      image(berries,this.x1 * -3.5, this.y2 * 2,width * 1.3,height * 1.3);
      image(liz,this.x1 * -0.1, this.y2 * -0.5,width * 1.3,height * 1.3);
      image(rat,this.x1 * -0.1, this.y2 * 1.85,width * 1.3,height * 1.3);
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
}