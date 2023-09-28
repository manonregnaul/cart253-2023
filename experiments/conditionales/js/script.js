/**
 * Conditional's experiment
 * Manon Regnault
 * 
 * This is the following of Pippin's videos about conditionals
 */

"use strict";

let caterpillar = {
    x: 100, 
    y: 250, 
    segmentSize: 50
}

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
    noStorke();
    fill(100, 200, 100); 
  
    ellipse(caterpillar.x, caterpillar.y, caterpillar.segmentSize);
    ellipse(caterpillar.x + 40, caterpillar.y, caterpillar.segmentSize);
    ellipse(caterpillar.x + 80, caterpillar.y, caterpillar.segmentSize);
    ellipse(caterpillar.x + 120, caterpillar.y, caterpillar.segmentSize);
    ellipse(caterpillar.x + 160, caterpillar.y, caterpillar.segmentSize);
    }
     

  
    
