/**
 * Conditional's experiment
 * Manon Regnault
 * 
 * This is the following of Pippin's videos about conditionals
 */

"use strict";

let circle = {
    x: undefined, 
    y: undefined, 
    size: 100
};

let dangerZone = {
    x: 250, 
    y: 250, 
    size: 150
}

function preload() {

}


/**
 * Created a canvas
*/
function setup() {
    createCanvas(500, 500);

    circle.x = random (0, width);
    circle.y = random (0, height);

}


/**
 * Drawing a black bg and a moving circle
*/
function draw() {
    background (0);

    // Danger zone 
    noFill();
    stroke(255, 0, 0);
    ellipse(dangerZone.x, dangerZone.y, dangerZone.size)

    fill(255);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);

}
     

  
    
