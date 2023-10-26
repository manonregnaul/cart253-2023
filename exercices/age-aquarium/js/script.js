/**
 * Exercice : Age of aquarium
 * Manon Regnault
 * 
 * Everytime the user touch a blue fish, the fish will disapear and everytime the user press the space key on the canvas 
 * a pink fish will appear. The goal would be to kill all the blue fish in order to repopulate the aquarium with 
 * pink fish. Furthermore, once a pink fish will appear on the aquarium the blue fish would run away from the pink one.
 * 
 */

"use strict";

let blueSchool = [];
let pinkSchool = [];

let blueSchoolSize = 40;
let pinkSchoolSize = 40;



function preload() {

}



function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < blueSchoolSize; i++){
        blueSchool[i] = createBlueFish(random(0, width), random(0, height));
    }

    for (let i = 0; i < pinkSchoolSize; i++){
        let pinkFish = createPinkFish(random(0, width), random(0, height));
        pinkSchool.push(pinkFish);
        
    }

}

function createBlueFish(x, y) {
    let blueFish = {
        x: 10, 
        y: 10, 
        size: 10, 
        vx: 0, 
        vy: 0, 
        ax: 0,
        ay: 0, 
        acceleration: 2,
        maxSpeed:7,
        speed: 2,
        displayBlueFish: false
    }; 
    return blueFish;
}

function createPinkFish(x, y) {
    let pinkFish = {
        x: 10, 
        y: 10,
        size: 20, 
        vx: 0, 
        vy: 0, 
        speed: 3,
    };
    return pinkFish;
}





function draw() {
    background(0, 0, 255);

    for (let i = 0;  i < blueSchool.length; i++){
        moveBlueFish(blueSchool[i]);
    }

    for (let i = 0;  i < blueSchool.length; i++){
        displayBlueFish(blueSchool[i]);
    }

    for (let i = 0;  i < pinkSchool.length; i++){
        movePinkFish(pinkSchool[i]);
    }

    for (let i = 0;  i < pinkSchool.length; i++){
        displayPinkFish(pinkSchool[i]);
    }



}




function moveBlueFish(blueFish, pinkFish) {
    let change = random(0, 1);
    if (change < 0.05) {
        blueFish.vx = random(-blueFish.speed, blueFish.speed);
        blueFish.vy = random(-blueFish.speed, blueFish.speed);
    }

    // Constrain the blue fish to the canvas 
    blueFish.x = constrain(blueFish.x, 0, width);
    blueFish.y = constrain(blueFish.y, 0, height);


    // If the blue fish is a a minimum distance of the pink, it would run away (Added some velocity to the movement like Pippin examples)

     

    for (let i = 0;  i < pinkSchool.length; i++){
    
        if(pinkSchool[i].x < blueFish.x){
            blueFish.ax = blueFish.acceleration;
        }
        else {
            blueFish.ax = -blueFish.acceleration;
        }
    
        if(pinkSchool[i].y < blueFish.y){
            blueFish.ay = blueFish.acceleration;
        }
        else {
            blueFish.ay = -blueFish.acceleration;
        }
    }


    blueFish.vx += blueFish.ax;
    blueFish.vx = constrain(blueFish.vx, -blueFish.maxSpeed, blueFish.maxSpeed);
    blueFish.vy += blueFish.ay;
    blueFish.vy = constrain(blueFish.vy, - blueFish.maxSpeed, blueFish.maxSpeed);


    // Move the fish
    blueFish.x += blueFish.vx;
    blueFish.y += blueFish.vy;
}

function displayBlueFish(blueFish) {
    push();
    fill(0, 0, 100);
    noStroke();
    ellipse(blueFish.x, blueFish.y, blueFish.size);
    pop();
}






function movePinkFish(pinkFish) {
    let change = random(0, 1);
    if (change < 0.05) {
        pinkFish.vx = random(-pinkFish.speed, pinkFish.speed);
        pinkFish.vy = random(-pinkFish.speed, pinkFish.speed);
    }

    // Move the fish
    pinkFish.x += pinkFish.vx;
    pinkFish.y += pinkFish.vy;

    // Constrain the blue fish to the canvas 
    pinkFish.x = constrain(pinkFish.x, 0, width);
    pinkFish.y = constrain(pinkFish.y, 0, height);
}

function displayPinkFish(pinkFish) {
    push();
    fill(100, 0, 0);
    noStroke();
    ellipse(pinkFish.x, pinkFish.y, pinkFish.size);
    pop();
}







// If the user touch the blue fish, the latter would disappear
function mousePressed(u) {
    if(mouseX, mouseY < blueFish.size/2){
        displayBlueFish = false;
    }
}

// When the user is pressing a key, a new pink fish appears
function keyPressed() {
    let pinkFish = createPinkFish(mouseX,mouseY);
    pinkSchool.push(pinkFish); 
}