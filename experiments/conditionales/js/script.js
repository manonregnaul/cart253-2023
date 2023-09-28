/**
 * Conditional's experiment
 * Manon Regnault
 * 
 * This is the following of Pippin's videos about conditionals
 */

"use strict";


let clownImage;

function preload() {
    clownImage = loadImage("assets/images/clown.png")
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

    imageMode(CENTER);
    image(clownImage, mouseX, mouseY, 50, 50);
    

}


  
    
