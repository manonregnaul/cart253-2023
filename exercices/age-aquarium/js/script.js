/**
 * Exercice : Age of aquarium
 * Manon Regnault
 * 
 * Everytime the user touch a blue fish, the fish will disapear and everytime the user click on the canvas 
 * a pink fish will appear. The goal would be to kill all the blue fish in order to repopulate the aquarium with 
 * pink fish. Furthermore, once a pink fish will appear on the aquarium the blue fish would run away from the pink one.
 * 
 */

"use strict";

let blueSchool = [];
let pinkSchool = [];

let blueSchoolSize = 40;
 






function preload() {

}



function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < blueSchoolSize; i++){
        blueSchool [i] = createBlueFish(random(0, width), random(0, height));
    }
}

function createBlueFish (x, y) {
    let blueFish = {
        x: x, 
        y: y, 
        size: 10, 
        vx: 0, 
        vy: 0, 
        speed: 2
    }; 
    return blueFish;
}

function draw() {
    background(0, 0, 255);

    for (let i = 0;  i < blueSchool.length; i++){
        moveBlueFish(school[i]);
    }

    for (let i = 0;  i< blueSchool.length; i++){
        displayBlueFishBlueFish(school[i]);
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

function mousePressed() {
    let pinkFish = createPinkFish(mouseX,mouseY);
    pinkSchool.push(pinkFish);
}