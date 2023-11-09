class Peoples {

    constructor(x, y, r, img) {
        this.x = x;
        this.y = y;
        this. r = r;
        this.people = random(peoples);
    }

    clicked (px, py) {
        if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
            this.people = random(peoples);
        }
    }

    move() {
        this.y = this.y + 3
    }

    display() {
        
    }
}