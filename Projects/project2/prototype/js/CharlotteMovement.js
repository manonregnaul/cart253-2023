let imageSpacing = 5;

class CharlotteMovement {

  // Created the construstor with initial speed
  constructor() {
    this.x = 400;
    this.y = 400;
    this.vx = 1;
    this.vy = 0;
}

 
  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x > width + imageSpacing) {
        this.x = -90;
        this.y = random(height);
        charlotteImages.push({ x: this.x, y: this.y });
    }
  }



  display() {
     for (let img of charlotteImages) {
            image(charlotte, img.x, img.y, 180, 620);
            img.x += 1; 
}
}
}