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
    x: 0,
    y: 250,
    size: 100,
    speed: 1,
    fill: 255
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
    background(backgroundShade);

    circle.x += circle.speed;
    circle.x = constrain(circle.x, 0, width);

    circle.size = map(mouseY, 0, height, 50, 500);

    circle.fill = map(circle.x, 0, width, 0, 255);
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);

}