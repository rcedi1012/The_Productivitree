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