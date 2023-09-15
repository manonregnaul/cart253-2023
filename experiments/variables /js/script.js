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
let circleX = 500;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2;
let circleAcceleration = 0.25;

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
    circleX += circleSpeed;
    circleSpeed += circleAcceleration;
    ellipse(circleX, circleY, circleSize);

}