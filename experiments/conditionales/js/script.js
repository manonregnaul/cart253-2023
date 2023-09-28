/**
 * Conditional's experiment
 * Manon Regnault
 * 
 * This is the following of Pippin's videos about conditionals
 */

"use strict";


let angle = 0;
let rectScale = 0

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
    background (127);

    push();
    fill(255, 0, 0); 
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(angle);
    scale(rectScale);
    rect(0 ,0 , 100, 100);
    pop()

    angle = angle + 0.01; 
    rectScale = rectScale + 0.01

}


  
    
