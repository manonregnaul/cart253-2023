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

    parrallels(100, 100);
    parrallels(50, 50);


}

function parrallels(x, y) {
    let x = 50;
    let y = 250; 
    for (let i = 0; i < 200; i++){
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x, y, 2, 500);
        x = x + 10;
    }
}