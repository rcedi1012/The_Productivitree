class timer{
    constructor() {
      this.x = 518;
      this.y = 287;
      this.size = 60;
      let stopwatch = false;
    }
  
    show() {
      fill(0, 0);
      //noStroke();
      
      image(clock,0,0,width,height);
      ellipse(mouseX, mouseY, this.size *2);
    }
  
    clicked() {
      if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
        ellipse(200,200,200);
        stopwatch = true;
      }
    }
  }