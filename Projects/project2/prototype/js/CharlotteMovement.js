class CharlotteMovement {

  // Created the construstor with initial speed
  constructor() {
    this.x = 330;
    this.y = 40;
    this.vx = 1; 
    this.vy = 0; 
}

 
  move() {
    this.x += this.vx;
    this.y += this.vy;


    if (this.x > width || this.x < 0) {
      this.vx *= -1; 
  }
}

  display() {
    image(charlotte, this.x, this.y, 180, 620);
}


}