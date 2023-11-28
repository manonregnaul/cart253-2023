class KayleMovement {

  constructor() {
    this.x = 100;
    this.y = 100;
    this.vx = 0;
    this.vy = 1;
}

 
  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x > width) {
        this.x = -90;
        this.y = random(height);
        kayleImages.push({ x: this.x, y: this.y });
    }
  }



  display() {
     for (let img of kayleImages) {
            image(kayle, img.x, img.y, 180, 620);
            img.x += 1; 
}
  }
}