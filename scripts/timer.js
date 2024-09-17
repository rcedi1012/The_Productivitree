class chbox {
    constructor() {
      chbox.x = 450;
      chbox.y = height/2 - 25;
      chbox.size = 150;
    }
  
    display() {
      ellipse(chbox.x, chbox.y, chbox.size);
      noStroke();
      fill(0);
    }
  
    clicked() {
      if (dist(mouseX, mouseY, chbox.x, chbox.y) < chbox.size) {
        ellipse(200,200,200);
      }
    }
  }