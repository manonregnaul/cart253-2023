class KayleMouvement {

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
        

}