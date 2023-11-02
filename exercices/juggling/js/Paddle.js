class Paddle {

    // The constructor() sets up the paddle's properties
    constructor(w, h) {
        // Position and size information
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - this.height/2
        this.alive = true 
    }

    move() {
        this.x = mouseX; 
    }

    decrease(){
        let decreasing = random(0, 0.5);
        this.size = this.size - decreasing;
        if ( this.size <= 0) {
            this.alive = false;   
    }
}

    display() {
        push();
        fill(200);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}
