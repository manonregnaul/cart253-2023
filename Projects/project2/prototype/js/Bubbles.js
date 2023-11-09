class Bubbles {

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this. r = r;
        this.binary = random(binaries);
    }

    clicked (px, py) {
        if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
            this.binary = random(binaries);
        }
    }
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
        this.y = this.y + 3;
    }

    display() {
        image(this.binary, this.x, this.y, this.r, this.r);
    
    }
}