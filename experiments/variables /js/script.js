/**
 * Variables experimentation
 * 
 * Manon Regnault
 * 
 * Variable experimentation: learning creating variables
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

let backgroundShade = 0;

let circle = {
    x: 250,
    y: 250,
    size: 200,
    speed: 1,
    fill: 0
};

/**
 * Create a canvas with the size of the window
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
}


/**
 * Changing color bckg and transparent mouse related circle
*/
function draw() {
    backgroundShade += 0.2;
    background(backgroundShade);

    circle.x += circle.speed;

    circle.fill = random(mouseX, mouseY);
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);

}