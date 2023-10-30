class Ball {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 40;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 10;
        this.active = true;

    }

    gravity(force){
        this.ay += force; 
    }

    move(){
        this.vx += this.ax;
        this.vy += this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, - this.maxSpeed, this.maxSpeed);

        this.x += this.vx;
        this.y += this.vy;

        if(this.y - this.size/2 > height) {
            this.active = false;
        }
    }

    bounce(paddle){
        if (this.x > paddle.x - paddle.width/2 &&
        this.x < paddle.x + paddle.width/2 &&
        this.y + this.size/2 > paddle.y - paddle.height/2 &&
        this.y - this.size/2 < paddle.y + paddle.height/2) {
            this.vy = - this.vy;
            this.ay = 0;
        }
    }

    display(){
        push();
        fill(0, 255, 127);
        stroke(0);
        ellipse(this.x, this.y, this.size);
        pop();
    }

}