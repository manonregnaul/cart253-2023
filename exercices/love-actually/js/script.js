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
    size: 70,
    vx: 0,
    vy: 0,
    speed: 3

}

let user = {
    x: 100,
    y: 400,
    size: 70,
    vx: 0,
    vy: 0,
    speed: 3
}

let state = 'title'; // Can be: title, simulation, yes, no




function preload() {
}


// Created a canvas and our setupCircles 
function setup() {
    createCanvas (500, 500);

    // Assign random velocity 
    police.vx = random(-police.speed, police.speed);
    police.vy = random(-police.speed, police.speed);

    user.vx = random(-user.speed, user.speed);
    user.vy = random(-user.speed, user.speed);
}



function draw() {
    
    
    background(234, 174, 151, 92);

    if (state === 'title') {
        title();
    }
    else if (state === 'simulation') {
        simulation ();
    }
    else if (state === 'procrastination') {
        procrastination ();
    }
    else if (state === 'noProcrastination') {
        noProcrastination ();
    }


}

function title () {
    push();
    textSize(40);
    fill(200, 100, 100);
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
    textSize(64);
    fill(255)
    textFont('Charlottenburg');
    textAlign(CENTER, CENTER);
    text('NO PROCRASTINATION!!', width/2, height/2);
    pop();
}

function procrastion() {
    push();
    textSize(64);
    fill(0, 0, 255);
    textFont('Charlottenburg');
    textAlign(CENTER, CENTER);
    text('NO PROCRASTINATION!!', width/2, height/2);
    pop();
}

function move() {
    // Police moves 
    police.x += police.vx;
    police.y += police.vy;
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
        if (user.x > width/3 || user.y > height/3) {
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

function checkOverlap () {
    // Check for the protagonists overlapping
    let d = dist(police.x, police.y, user.x, user.y)

    if (d < police.size/2 + user.size/2) {
      state = 'noProcrastination'
    }
}

function keyPressed () {
    // Have to press the space bar to beggin the simulation 
    if (state === 'title') {
        state = 'simulation';
    }

    // Have to control the arrow in order to control the simulation 
}








  