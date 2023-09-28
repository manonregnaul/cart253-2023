/**
 * Conditional's experiment
 * Manon Regnault
 * 
 * This is the following of Pippin's videos about conditionals
 */

"use strict";

//let backgroundShade = 0
//let circle = {
   // x: 0, 
    //y: 250,
    //size: 100,
    //speed: 1
//}

let displayCircle = false;

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

    background(0);

    if (mouseIsPressed) {
        displayCircle = true;
    }
    
    if (displayCircle) {
        ellipse (250, 250, 100, 100);
    }
    }
     

  
    
