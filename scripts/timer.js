class timer{
    constructor() {
      this.x = 518;
      this.y = 287;
      this.size = 50;
      let stopwatch = false;
    }
  
    show() {
      fill(0, 0);
      noStroke();
      ellipse(this.x, this.y, this.size *2);
      image(clock,450,height/2-25,150,150);
    }
  
    clicked() {
      if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
        ellipse(200,200,200);
        stopwatch = true;
      }
    }
  }