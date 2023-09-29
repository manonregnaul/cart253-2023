/**
 * Functions experiments
 * Manon Regnault 
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";



function setup() {
    createCanvas(500, 500);

}



function draw() {
    background(0);

    parrallels(100, 100, 5, 1, 100, 1);
    parrallels(50, 50, 10, 2, 20, 5);
    parrallels(200, 200, 15, 7, 3, 10);
    parrallels(312, 257, 20, 0.5, 300, 20);


}

function parrallels (x, y, numLines, lineWidth, lineHeight, lineSpacing) {
    for (let i = 0; i < numLines; i++){
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x, y, lineWidth, lineHeight);
        x = x + lineSpacing;
    }
}