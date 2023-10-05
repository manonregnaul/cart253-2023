/**
 * Love Actually
 * Manon Regnault
 * 
 * We open with a title screen "Procrastination tonight?".
 * We the simulation beggins we see one police truck and one circle (the user).
 * They start moving in a random direction but when the user activate the keyboard with the space bar, the police beggins to follow us.
 * The user would have to use the arrows to avoid beeing chase by the police. 
 * If the police manage to touch us, the title "no procastination" will appear.
 * If we manage to go to the lower east side of the canvas (the spot of the police at first place) then the title "Procrastination!" would appear.
 */

"use strict";




let police = {
    x: 400,
    y: 100,
    w: 70,
    h: 50,
    tl: 20,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 1.5

}

let user = { 
    x: 100,
    y: 400,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5 
}

let state = 'title'; // Can be: title, simulation, yes, no

let numStatic = 1000;  


function preload() {
}


// Created a canvas and our setupCircles 
function setup() {
    createCanvas (500, 500);


}



function draw() {
    
    displayBackground();

    if (keyIsDown (UP_ARROW)) {
        user.y = user.y - user.speed;   
    }
    else if (keyIsDown (DOWN_ARROW)) {
        user.y = user.y + user.speed;
    }
    else if (keyIsDown (LEFT_ARROW)) {
        user.x = user.x -  user.speed;
    }
    else if (keyIsDown (RIGHT_ARROW)){
        user.x = user.x + user.speed; 
    }


    if (state === 'title') {
        title();
    }
    else if (state === 'simulation') {
        simulation();
    }
    else if (state === 'procrastination') {
        procrastination();
    }
    else if (state === 'noProcrastination') {
        noProcrastination();
    }


}

function displayBackground () {
    
    background(234, 174, 200, 92);
    stroke(0);
    strokeWeight(10);
     

    // Display num static
    push();
    for (let i = 0; i < numStatic; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(255);
        point(x, y);
      }
    pop();

}

function title () {
    push();
    textSize(40);
    stroke(0);
    strokeWeight(2);
    fill(255, 100, 0);
    textFont('Charlottenburg');
    textAlign(CENTER, CENTER);
    text('PROCRASTINATION TONIGHT?', width/2, height/2);
    pop();
}

function simulation() {
    move();
    display();
    checkUserPosition();
    checkOverlap ();  
}


function noProcrastination() {
    push();
    textSize(30);
    stroke(0, 0, 100);
    strokeWeight(1);
    fill(0, 0, 255); 
    textFont('Charlottenburg');
    textAlign(CENTER, CENTER);
    text('NO PROCRASTINATION!!', width/2, height/2);
    pop();

    checkOverlap ();
}

function procrastination() {
    push();
    textSize(50);
    strokeWeight(2);
    fill(100, 0, 255);
    textFont('Charlottenburg');
    textAlign(CENTER, CENTER);
    text('PROCRASTINATION!!', width/2, height/2);
    pop();
}

function move() {
    // Police moves 
    // police.x += police.vx;
    // police.y += police.vy;
    if (police.x > user.x) {
        police.x -= police.speed;
    }
    else if (police.x < user.x) {
        police.x += police.speed;
    }
    else if (police.y > user.y) {
        police.y -= police.speed;
    }
    else if (police.y < user.y) {
        police.y += police.speed;
    }


    // User moves 
    user.x += user.vx
    user.y += user.vy
}


function display(){
    // Display police
    push();
    if(police.x > 500/2){
            fill(255, 0, 0);
        }
    else {
        fill(0, 0, 255);
    }
    rect(CENTER);
    strokeWeight(3);
    stroke(255);
    rect(police.x, police.y, police.w, police.h, police.tl, police.size);
    fill(0, 0, 255);
    pop();


    // Display user
    push();
    strokeWeight(10);
    stroke(157, 87, 242, 95);
    fill(90, 219, 200, 86);
    ellipse(user.x, user.y, user.size)
    pop();
    }


function checkUserPosition() {
     // Check for the user's position in the lower east of the canvas 
        if (user.x > (width*2/3) && user.y < height/3) {
            state = 'procrastination'
        }
    
    
     // If in the lower east of the canvas
        if (user.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
            return true;
          }
          else {
            return false;
          }
    
}

function checkOverlap() {
    // Check for the protagonists overlapping
    let d = dist(police.x, police.y, user.x, user.y)

    if (d < police.size/2 + user.size/2) {
      state = 'noProcrastination'
    }
}






//function keyPressed () {




function keyPressed() {
    // Have to press the space bar to beggin the simulation 
    if (state === 'title') {
        state = 'simulation';
    }

   

          }









  