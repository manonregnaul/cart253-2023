/**
 * E1: I like to move it
 * Manon Regnault
 * 
 * Create a program full of shapes that move, change size and color, and anything else you want to experiment with.
 */

"use strict";

    
/**
 * Description of preload
*/
function preload() {
    

}


/**
 * Description of setup
*/

 // Declare the variables 
 let backgroundShade = 90;

 let circle = {
    x: 0,
    y: 250, 
    size: 100, 
    speed: 1,
 };




function setup() {
    createCanvas(500, 500);
    background(7, 224, 174, 88);
    
}


/**
 * Description of draw()
*/
function draw() {
    //background(backgroundShade);
    //noStroke();
    ellipse(circle.x, circle.y, circle.size);
    circle.x = circle.x + circle.speed; 
    
}