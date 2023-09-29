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

    parrallels(100, 100, 5);
    parrallels(50, 50, 10);
    parallels(200, 200, 15);
    parallels(312, 257, 20);


}

function parrallels(x, y, numLines) {
    for (let i = 0; i < numLines; i++){
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x, y, 2, 150);
        x = x + 10;
    }
}