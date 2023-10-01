/**
 * Functions experiments
 * Manon Regnault 
 
 */

"use strict";

let bg = 0;



function setup() {
    createCanvas(500, 500);

}


function draw() {
    background(bg);

    textAlign(CENTER, CENTER);
    textSize(64);
    fill(255);
    text(key, width/2, height/2)
    }

function keyPressed() {
    if(key === 'a') {
        bg = 0;
    }
    else if(key === 'b') {
        bg = 127;
    }
    else if (key === 'c') {
        bg = 255;
    }
}
 