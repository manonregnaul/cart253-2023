/**
 * Functions experiments
 * Manon Regnault 
 
 */

"use strict";

let hello = {
    string: 'Hello, world!', 
    x: 250, 
    y: 250, 
    vx: 5, 
    vy: 1, 
    size: 64
}

function setup() {
    createCanvas(500, 500);


}



function draw() {
    background(0);

    hello.x = hello.x + hello.vx;
    hello.y = hello.y + hello.vy;


    hello.size += 1;


    textAlign(CENTER, CENTER);
    textSize(64);
    textStyle(BOLD);


    fill(200, 50, 200);
    stroke(50, 200, 50);
    strokeWeight(3);


    text('Hello, world!', 250, 250);


}

