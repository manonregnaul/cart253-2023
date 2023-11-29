// Class for the third part  of my program 
class BouncingBall {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color(255,0,0, 10)
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

// Boucing movement and constrain to bounce on the edge of th canvas
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.speedX *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.speedY *= -1;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  
  clicked(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    if (d < this.radius) {
      this.color = color(240, 0, 0, 10);
    }
  }
}
