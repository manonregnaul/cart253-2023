/**
 * Conditional's experiment
 * Manon Regnault
 * 
 * This is the following of Pippin's videos about conditionals
 */

"use strict";

let backgroundShade = 0
let circle = {
    x: 0, 
    y: 250,
    size: 100,
    speed: 5
}


function preload() {

}


/**
 * Created a canvas
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Drawing a black bg and a moving circle
*/
function draw() {
    background(backgroundShade);

    circle.x = circle.x + circle.speed;

    if (circle.x > width) {
        circle.speed = -circle.speed;
    }

    if (circle.x < 0) {
        circle.speed = -circle.speed;
    }

    if (mouseY < height/2) {
        fill(255, 0, 0);
    }

    if (mouseY >  height/2) {
        fill(0, 0, 255);
    }
    ellipse(circle.x, circle.y, circle.size);
    

}