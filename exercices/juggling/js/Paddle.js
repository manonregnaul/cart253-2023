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


    decrease(){
        let decreasing = random(0, 0.8);
        this.width = this.width - decreasing;
        //this.height = this.height - decreasing;
       // if (this.width <= 0) {
          //  this.alive = false;   
    }


    move() {
        this.x = mouseX; 
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
