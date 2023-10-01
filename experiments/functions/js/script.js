/**
 * Functions experiments
 * Manon Regnault 
 
 */

"use strict";

let circle = {
    x: 250, 
    y: 250, 
    size: 100, 
    vx: 0, 
    vy: 0, 
    speed: 2
}



function setup() {
    createCanvas(500, 500);

}


function draw() {
    background(0);

    circle.vx = random(-circle.speed, circle.speed);
    circle.vy = random(-circle.speed, circle.speed);

    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    ellipse(circle.x, circle.y, circle.size);

}