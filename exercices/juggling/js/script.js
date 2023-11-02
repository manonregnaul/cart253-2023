/**
 * Object Oriented Programming activity 
 * Manon Regnault
 * 
 * Readaptation of the Pippin exercice
 * "The user will control a rectangular "paddle" at the bottom of the
 * screen, moving it horizontally with the mouse position. Balls will fall from
 * the top of the screen. If they hit the paddle, they will bounce upward
 * and fall again. If they miss the paddle, they will disappear off the bottom.""
 * 
 * To add: 
 * The ball would change color when touching the paddle 
 * The ball will inscrease there speed when they'll touch the paddle
 * The user can also add other balls when pressing a key !
 * There will be differents states and 2 endings: with help of the timer, the user would have to keep the ball on the screen as long as possible. 
 * If the timer reach 45 seconds and the user are he wins ! If he looses all the ball before he looses. 
 * 
 */

"use strict";


let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 50

let gameOverStartTime;
let gameLength = 60 * 30;

let state = `title`; // game, win, lose


function setup() {
    createCanvas(windowWidth, windowHeight);

    paddle = new Paddle(300, 20);

    for (let i = 0; i < numBalls; i++) {
        let x = random(0, width);
        let y = random(-400, - 100);
        let ball = new Ball(x, y);
        balls.push(ball);
    }

}



function draw() {
    background(76, 46, 152);

    if (state === `title`) {
        title();
      }
      else if (state === `game`) {
        game();
      }
      else if (state === `win`) {
        win();
      }
      else if (state === `lose`) {
        lose();
      }

}

function title() {
    background(76, 46, 152);

    push();
    textSize(100);
    stroke(0);
    strokeWeight(2);
    fill(0, 255, 127);
    textFont('Osmose');
    textAlign(CENTER, CENTER);
    text('Need for Speed', width/2, height/2);
    pop();

    push();
    textSize(20);
    fill(0, 255, 127);
    textFont('Osmose');
    text('Press a key to add another ball', 100, 200);
    pop();
}
    
function game() {
    if (frameCount - gameOverStartTime >= gameLength) {
        gameOver();
      }

    paddle.move();
    paddle.display();

    for (let i = 0; i < balls.length; i++) { 
        let ball = balls[i];
        if (ball.active) {
        ball.gravity(gravityForce);
        ball.move();
        ball.bounce(paddle);
        ball.changeColor(paddle);
        ball.display();
        }
    }
}

function gameOver() {

  for (let i = 0; i < balls.length; i++) { 
    let ball = balls[i];
    if (ball.active = false) {
      state = `lose`;
    }
    else {
      state = `win`;
    }
  }
}





function mousePressed() {
    if (state === 'title') {
      gameOverStartTime = frameCount;
      newCircleStartTime = frameCount;
        state = 'game';
    }
    else if (state === 'game') {
        checkNoCircles();
    }
}

function checkNoCircles () {
    for (let i = 0; i < balls.length; i++) { 
    let ball = balls[i];

      if (ball.active= false){
      state = 'lose'
      }
    }
  }


function win() {
  background(0);

  push();
  textSize(100);
  stroke(0);
  strokeWeight(2);
  fill(0, 255, 127);
  textFont('Osmose');
  textAlign(CENTER, CENTER);
  text('LOOSER!!', width/2, height/2);
  pop();
}

function lose(){
  background(0);

  push();
    textSize(10);
    stroke(0);
    strokeWeight(2);
    fill(0, 255, 127);
    textFont('Osmose');
    textAlign(CENTER, CENTER);
    text('winner', width/2, height/2);
    pop();;
}


