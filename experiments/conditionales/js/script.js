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
    noStroke();
    fill(100, 200, 100); 

    let x = caterpillar.x;
    let numSegments = 5;
    let segmentsDrawn = 0;  

    while (segmentsDrawn < numSegments) {
        ellipse(x, caterpillar.y, caterpillar.segmentSize);
        x = x + 40;
        segmentsDrawn = segmentsDrawn + 1; 
    }
}
     

  
    
