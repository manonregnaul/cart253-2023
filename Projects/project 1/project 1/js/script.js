/**
 * Project 1 : ROBOT OR HUMAN FOOTBALL?
 * Manon Regnault
 * 
 * We open with a title screen "Robot or Human football?"
 * 
 * When the simulation beggins we see one statium with a robot and a human that are facing. In the middle, a football ball. When the user press the space bar, the match beggins. 
 * The ball starts moving in a random direction but is constrain to stay in the canvas. It is the same for the robot. Whereas for the user, he has to control the differents arrows to the direct the human towards the ball. 
 * The robot would be attracted by the ball, and its direction would depends on the position of the balls. However, its speed will be lower than our speed. 
 * 
 * If the robot manages to touch the ball, the  end title "Robot" will appear
 * If the user manages to touch the ball, the end title "Human" will appear
 * 
 */

"use strict";


let ball = {
    x: 352,
    y: 250,
    vx: 0,
    vy: 0,
    speed: 3,
    size: 30 
}

let stadium;

let human = {
    x: 500, 
    y: 250, 
    size: 70,
    dragging: false, 
}


let robot = {
    x: 160, 
    y: 220, 
    h: 70, 
    w: 50,
    vx: 0,
    vy: 0,
    ax: 0, 
    ay: 0, 
    acceleration: 0.25,
    maxSpeed: 2
}

    let state = 'title'; // Can be: title, simulation, yes, no  

    let numStatic = 1000;




// Preload the ball and the statium 
function preload() {
   stadium = loadImage('assets/images/stadium.png');
}









// Setup the preloaded images and our stadium canvas surrounded with brown springles 
function setup() {
    createCanvas(700, 500);
    background(94, 49, 40, 37);
    


}







//
function draw() {


    

    if(state === 'title') {
        title();
    }
    else if (state === 'simulation'){
        simulation();
    }
    else if (state === 'humanWon'){
        humanWon();
    }
    else if(state === 'robotWon'){
        robotWon();
    }
}







function title(){

    displayBackground();

    push();
    textSize(80);
    stroke(0);
    strokeWeight(2);
    fill(0, 200, 0);
    textFont('Charlottenburg');
    textAlign(CENTER, CENTER);
    text('Human or Robot football?', width/2, height/2);
    pop();
}

function simulation(){
    image(stadium, -1160, -200);
    ballMove();
    robotMove();
    displayBall();
    displayHuman();
    displayRobot();
    checkHumanOverlap();
    checkRobotOverlap();
}

function humanWon() {
    push();
    textSize(30);
    stroke(0, 0, 100);
    strokeWeight(1);
    fill(0, 0, 255); 
    textFont('Charlottenburg');
    textAlign(CENTER, CENTER);
    text('HUMAN', width/2, height/2);
    pop();



    checkHumanOverlap();
}

function robotWon() {
    push();
    textSize(50);
    strokeWeight(2);
    fill(100, 0, 255);
    textFont('Charlottenburg');
    textAlign(CENTER, CENTER);
    text('ROBOT', 352, 250);
    pop();


    checkRobotOverlap();
}


function displayBackground(){
  
    background(25, 12, 100);

    //Display numStatic 
    push();
    for (let i = 0; i < numStatic; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(255);
        strokeWeight(3);
        point(x, y);
      }
    pop();
}




function ballMove(){
        // Ball moves 
    if (ball.x > width || ball.x < 0) {
        ball.speed = -ball.speed;
    } 
    else if (ball.y > width || ball.x < 0){
        ball.speed = -ball.speed;
    }

    ball.x += ball.vx 
    ball.y += ball.vy

}

function robotMove(){
    if(ball.x > robot.x){
        robot.ax = robot.acceleration;
    }
    else if(ball.x < robot.x){
        robot.ax = -robot.acceleration;
    }
    else if(ball.y > robot.y){
        robot.ax = robot.acceleration;
    }
    else if (ball.x < robot.x){
        robot.ax = -robot.acceleration;
    }

    robot.vx += robot.ax 
    robot.vy += robot.ay 

    robot.vx = constrain(robot.vx, -circle.maxSpeed, circle.maxSpeed);
    robot.vy = constrain(robot.vy, -circle.maxSpeed, circle.maxSpeed);
}








function displayBall(){
     // Display ball 
    push();
    fill(255, 167, 1);
    strokeWeight(6);
    stroke(252, 142, 88);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

function displayHuman(){
    push();
    strokeWeight(10);
    stroke(121, 63, 23);
    fill(252, 114, 88);
    ellipse(human.x, human.y, human.size);
    pop();
} 


function displayRobot(){
    push();
    rect(CENTER);
    strokeWeight(5);
    stroke(100);
    fill(0);
    rect(robot.x, robot.y, robot.h, robot.w,);
    pop();
}



function checkHumanOverlap(){
    let d2 = dist(human.x, human.y, ball.x, ball.y);

    if (d2 < human.size/2 + ball.size/2){
        state = 'humanWon';
    }
}



function checkRobotOverlap(){  
    let d3 = dist(robot.x, robot.y, ball.x, ball.y);

    if (d3 < robot.size + ball.size/2){
        state = 'robotWon';
    }
    
}




function mousePressed(){
    if(state === 'title'){
        state = 'simulation'
    }


    let d = dist(mouseX, mouseY, human.x, human.y)
    if(d < human.size/2){
        human.dragging = true;
    }
}

function mouseReleased (){
    human.dragging = false;
}

function mouseDragged (){
    if (human.dragging) {
        human.x = mouseX;
        human.y = mouseY;
    }
}
