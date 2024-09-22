class timer{
    constructor() {
      this.x = 518;
      this.y = 287;
      this.size = windowWidth * 0.03;
      let stopwatch = false;
    }
  
    show() {
      fill(0, 0);
      //noStroke();
      
      image(clock,0,0,width,height);
      ellipse(windowWidth * 0.72, aspectH * 0.45, this.size *2);
    }
  
    clicked() {
      if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
        ellipse(200,200,200);
        stopwatch = true;
      }
    }
  }