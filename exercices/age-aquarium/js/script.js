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

let blueSchoolSize = 200;
let pinkSchoolSize = 0;

let state = 'title' // Can be : title, simulation, end


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
        x: 400, 
        y: 400, 
        size: 10, 
        vx: 0, 
        vy: 0, 
        ax: 0,
        ay: 0, 
        acceleration: 2,
        maxSpeed:7,
        speed: 2,
        display: true
    }; 
    return blueFish;
}

function createPinkFish(x, y) {
    let pinkFish = {
        x: 200, 
        y: 200,
        size: 40, 
        vx: 0, 
        vy: 0, 
        speed: 3,
    };
    return pinkFish;
}





function draw() {
    background(10, 120, 130, 20);



    if(state === 'title') {
        title();
    }
    else if (state === 'simulation'){
        simulation();
    }
    else if (state === 'end'){
    }

}

function title (){
    background(255);

    push();
    textSize(60);
    stroke(0);
    strokeWeight(2);
    fill(200, 0, 100);
    textFont('Nuances');
    textAlign(CENTER, CENTER);
    text('Catch the fish!', width/2, height/2);
    pop();

    push();
    textSize(20);
    fill(200, 80, 100);
    textFont('Nuances');
    text('Press a key to add a killer pink fish', 100, 200);
    pop();
}

function simulation(){
    for (let i = 0;  i < blueSchool.length; i++){
        moveBlueFish(blueSchool[i]);
        displayBlueFish(blueSchool[i]);
        checkNoBlueFish(blueSchool[i]);
        killBlueFish(blueSchool[i]);
    }


    for (let i = 0;  i < pinkSchool.length; i++){
        movePinkFish(pinkSchool[i]);
        displayPinkFish(pinkSchool[i]);
        //killBlueFish(pinkSchool[i]);
    }
 }

function end(){
    background(0);

    push();
    textSize(60);
    stroke(0);
    strokeWeight(2);
    fill(200, 0, 100);
    textFont('Nuances');
    textAlign(CENTER, CENTER);
    text('KILLER!', width/2, height/2);
    pop();  
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


    blueFish.vx += blueFish.ax;
    blueFish.vx = constrain(blueFish.vx, -blueFish.maxSpeed, blueFish.maxSpeed);
    blueFish.vy += blueFish.ay;
    blueFish.vy = constrain(blueFish.vy, - blueFish.maxSpeed, blueFish.maxSpeed);


    // Move the fish
    blueFish.x += blueFish.vx;
    blueFish.y += blueFish.vy;

   
}

function displayBlueFish(blueFish) {
    if (blueFish.display = true){
    push();
    fill(52, 112, 224, 88);
    noStroke();
    ellipse(blueFish.x, blueFish.y, blueFish.size);
    pop();
    }
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

function displayPinkFish(pinkFish){
    push();
    fill(100, 0, 100);
    noStroke();
    ellipse(pinkFish.x, pinkFish.y, pinkFish.size);
    pop();
    }

function killBlueFish(pinkSchool, blueFish){
    for (let i = 0;  i < pinkSchool.length; i++){
        let d = dist(pinkFish.x, pinkFish.y, blueFish.x, blueFish.y);
        if (d < pinkFish.size/2 + blueFish.size/2){
           blueFish.display = false;
        }
    }
}

function checkNoBlueFish(blueFish){
    if(blueFish.display = false){
        state = 'end';
    }
}

 


// If the user touch the blue fish, the latter would disappear
function mousePressed() {
    if(state === 'title'){
        state = 'simulation'
    }
}


// When the user is pressing a key, a new pink fish appears
function keyPressed() {
    let pinkFish = createPinkFish(mouseX,mouseY);
    pinkSchool.push(pinkFish); 
}