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

let blueFish = {
    x: 10, 
    y: 10, 
    size: 70, 
    vx: 0, 
    vy: 0, 
    speed: 1,
    displayBlueFish: true
}; 
//return blueFish;
let pinkFish = {
    x: 100, 
    y: 100,
    size: 100, 
    vx: 0, 
    vy: 0, 
    speed: 0.25,
};


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

function moveBlueFish() {
    let change = random(0, 1);
    if (change < 0.05) {
        blueFish.vx = random(-blueFish.speed, blueFish.speed);
        blueFish.vy = random(-blueFish.speed, blueFish.speed);
    }

    // Move the fish
    blueFish.x += blueFish.vx;
    blueFish.y += blueFish.vy;

    // Constrain the blue fish to the canvas 
    blueFish.x = constrain(blueFish.x, 0, width);
    blueFish.y = constrain(blueFish.y, 0, height);
}

function displayBlueFish() {
    push();
    fill(0, 0, 100);
    noStroke();
    ellipse(blueFish.x, blueFish.y, blueFish.size);
    pop();
}


function movePinkFish() {
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

function displayPinkFish() {
    push();
    fill(100, 0, 0);
    noStroke();
    ellipse(pinkFish.x, pinkFish.y, pinkFish.size);
    pop();
}


// If the user touch the blue fish, the latter would disappear
function mousePressed() {
    if(mouseX, mouseY < blueFish.size/2){
        displayBlueFish = false;
    }
}

// When the user is pressing a key, a new pink fish appears
function keyPressed() {
    let pinkFish = createPinkFish(mouseX,mouseY);
    pinkSchool.push(pinkFish); 
}