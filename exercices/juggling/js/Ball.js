class Ball {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 40;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 8;
        this.ballColor = {
            r: 0, 
            g: 255, 
            b: 127
        }
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

    increaseSpeed(paddle){
        if (this.x > paddle.x - paddle.width/2 &&
        this.x < paddle.x + paddle.width/2 &&
        this.y + this.size/2 > paddle.y - paddle.height/2 &&
        this.y - this.size/2 < paddle.y + paddle.height/2) {
            this.vy = - this.vy;
            this.ay += 2;
        }
    }
    
    display(){
        push();
        //fill(this.ballColor.r, this.ballColor.g, this.ballColor.b);
        stroke(0);
        ellipse(this.x, this.y, this.size);
        pop();
    }

    changeColor(paddle){ 
        if (this.x > paddle.x - paddle.width/2 &&
        this.x < paddle.x + paddle.width/2 &&
        this.y + this.size/2 > paddle.y - paddle.height/2 &&
        this.y - this.size/2 < paddle.y + paddle.height/2) {
        fill(255, 0, 0);
        }
        else {
            fill(this.ballColor.r, this.ballColor.g, this.ballColor.b) 
        }
        
    }



}