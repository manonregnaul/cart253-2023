
// Class for the first part of my program
class Bubbles {

    constructor(x, y, r, vx, vy, maxSpeed, speed) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.vx = vx;
        this.vy = vy;
        this.maxSpeed = maxSpeed, 
        this.speed = speed,
        this.binary = random(binaries);
    }

   
    // If we click on 1 image it will change its looks
    clicked(px, py) {
    
        if (
          px > this.x &&
          px < this.x + this.r &&
          py > this.y &&
          py < this.y + this.r
        ) {
          this.binary = random(binaries);
    
        }
      }

    

    move() {
       

      // Constrain the images to stay in the canvas
        this.y = constrain(this.y, 0, height - this.r);
        this.y += this.vy;
        
        

    }

    display() {
        image(this.binary, this.x, this.y, this.r, this.r);
    
    }
}