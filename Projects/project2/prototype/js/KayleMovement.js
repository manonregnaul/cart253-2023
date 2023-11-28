class KayleMovement {

  // Acceleration for a natural movement with an initial speed 
  constructor() {
    this.x = width - 25;
    this.y = random(height);
    this.vx = -1;
    this.vy = 0;
    this.acceleration = 0.005;
}

// Constant acceleration to the left 
  move() {
    this.vx += this.acceleration;
    this.x += this.vx;
    if (this.x < 0) {
        this.x = width;
        this.y = random(height);
    }
  }

  display() {
    image(kayle, this.x, this.y, 50, 50);
  }


// Check if we can clik on Kayle image 
checkClick(mx, my) {
  let d = dist(mx, my, this.x + 25, this.y + 25);
  if (d < 25) {
      centerAllImages();
  }
}

// Make both images at the center of the canvas when cliking on them 
  center() {
  this.x = width / 2;
  this.y = height / 2;
  }

}