/**
 * Conditional's experiment
 * Manon Regnault
 * 
 * This is the following of Pippin's videos about conditionals
 */

"use strict";


let bg = {
    r: 255,
    b: 0,
    g: 0
}

let circle = {
    x: 250, 
    y: 250, 
    size: 100, 
    vx: 0,
    vy: 0,
    speed: 5 

};



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
    background (bg.r, bg.g, bg.b);

    if (mouseX < circle.x) {
        circle.vx = -circle.speed;
    }
    else {
        circle.vx = circle.speed; 
    }

    if (mouseY < circle.y) {
        circle.vy = -circle.speed;
    }
    else{
        circle.vy = circle.speed;
    }

    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    ellipse(circle.x, circle.y, circle.size);
}


  
    
