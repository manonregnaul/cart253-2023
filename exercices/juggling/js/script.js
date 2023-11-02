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


let gravityForce = 0.0035;

let paddle;

// Array to store the balls 
let balls = [];
let numBalls = 30
let gameLength = 60 * 10;
let state = `title`; // game, win, lose




// setup() creates the canvas, called the Paddle's and the balls in our game 
function setup() {
    createCanvas(windowWidth, windowHeight);

    paddle = new Paddle(300, 20);

    // Create our balls by counting up to the number of the balls and pushing them in the array 
    for (let i = 0; i < numBalls; i++) {
        let x = random(0, width);
        let y = random(-400, - 100);
        let ball = new Ball(x, y);
        balls.push(ball);
    }

}



function draw() {
    background(76, 46, 152);

    // Call the differents state of our game 
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

// Add a first state for the beggigining of our game: the Title state 
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
 

// Called our function in order to simulate our game
function game() {

  // Display the paddle thank to the paddle class and make the paddle decrease during the game in order to not be able for the ball the touch the paddle anymore
    paddle.move();
    paddle.display();
    paddle.decrease();

     // Loop through all the balls in the array and display them for the balls, the move and bounce on the paddle nicely with a velocity 
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

// Trying to manipulate my differents ending state, but it doesn't work...
function gameOver() {
  // Check if there are 0 circles left
  if (balls.length === 20) {
    // if there are no circles left, we win
    state = `win`;
  }
  else if (balls.length === 0){
    // Otherwise they lost
    state = `lose`;
  }
}





// Function that allows us to start the game 
function mousePressed() {
  if (state === `title`) {
    setTimeout(gameOver, gameLength);
    state = `game`;
  }
}


// Function that tells us if there is still are ball in our canvas, if not we would change our state to the lose one 
function checkNoBalls () {
    for (let i = 0; i < balls.length; i++) { 
    let ball = balls[i];

      if (ball.active = false){
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


