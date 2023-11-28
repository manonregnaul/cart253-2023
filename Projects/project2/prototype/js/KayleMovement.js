class KayleMovement {

  // Acceleration for a natural movement with an initial speed 
  constructor() {
    this.x = width - 50; 
    this.y = height / 2;
    this.vx = -1; 
    this.vy = 0;
    this.acceleration = 0.01; 
}

// Constant acceleration to the left 
  move() {
    this.vx += this.acceleration; 
    this.x += this.vx;
  }

  display() {
    image(kayle, this.x, this.y, 50, 50);
  }


// Check if we can clik on Kayle image 
  checkClick(mx, my) {

    let d = dist(mx, my, this.x + 25, this.y + 25);
    if (d < 25) {
        // Si le clic est sur Kayle, centrer toutes les images
        for (let i = 0; i < bubbles.length; i++) {
           bubbles[i].center();
        }
        charlotte.center();
        this.center();
  }
}

// Make both images at the center of the canvas when cliking on them 
  center() {
  this.x = width / 2;
  this.y = height / 2;
  }

}