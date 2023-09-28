/**
 * Conditional's experiment
 * Manon Regnault
 * 
 * This is the following of Pippin's videos about conditionals
 */

"use strict";

let circle = {
    x: 250, 
    y: 250, 
    size: 100
};



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
    background (0);

    ellipse(circle.x, circle.y, circle.size);
}

function mousePressed () {
     circle.x = mouseX;
     circle.y = mouseY;
}

  
    
