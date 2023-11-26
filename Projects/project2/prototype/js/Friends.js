class Friends {

    constructor(x, y, r, img) {
        this.x = x;
        this.y = y;
        this. r = r;
        this.maxSpeed = maxSpeed, 
        this.speed = this.speed,
        this.concordian = random(concordians);
    }

    clicked (px, py) {
        if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
            this.concordian = random(concordians);
        }
    }

    move() {

        this.y = this.y + 3;
        this.y = this.y - 3;
    }

    display() {
        
    }
}