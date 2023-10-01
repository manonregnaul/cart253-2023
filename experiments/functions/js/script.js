/**
 * Functions experiments
 * Manon Regnault 
 
 */

"use strict";

let circle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2
};

function setup() {
    createCanvas(500, 500);
    circle.vx = circle.speed;
    textSize(32);
    textAlign(CENTER, CENTER);


}



function draw() {
    background(0);

    //Title
    fill(255);
    text('Life', width/2, height/2);


    // Animation
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;


    ellipse(circle.x, circle.y, circle.size);


    //Ending
    fill(127);
    text('It all over', width/2, height/2);

}

