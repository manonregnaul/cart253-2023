class Paddle {

    constructor(w, h) {
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - this.height/2
    }

    move() {
        this.x = mouseX; 
    }

    decrease(paddle){
        let decreasing = random(0, 0.1);
        this.size = this.size - decreasing;
        
    }

    display(){
        push();
        fill(200);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }


}