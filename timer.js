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
    this.y1 = aspectH * 0.15;
    this.y2 = aspectH * 0.85;
    this.sizex = windowWidth * 0.65;
    this.sizey = windowWidth * 0.40;
  }

  show() {
    //rect
    fill(176, 65, 62);
    stroke(255, 255, 199);
    strokeWeight(windowWidth * 0.004);
    rect(this.x1, this.y2, this.sizex, this.sizey, windowWidth * 0.004);

    //text


    //items
  }

  clicked() {
    mClick = 2;
    if ((mouseX > this.x1) && (mouseX < this.x1+this.sizex) &&
        (mouseY > this.y2) && (mouseY < this.y2+this.sizey)) {
          if (this.y1 < this.y2 && mClick === 2) {
            this.y2 = this.y2 - 1*sin(angle);

          }
          ellipse(200,200,200);
    }
  }

}