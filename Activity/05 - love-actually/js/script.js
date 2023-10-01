/**
 * Activity Love Actually
 * Manon Regnault
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let circle1 = {
    x: undefined,
    y: 250,
    size: 100, 
    vx: 0, 
    vy: 0, 
    speed: 3
}

let circle2 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0, 
    vy: 0,
    speed: 3
}


function preload() {


}



function setup() {
    createCanvas(500, 500);

    // Position circles seperated from one another
    circle1.x = width / 3;
    circle2.x = 2 * width / 3;

    // Start circles moving in a random direction 
    circle1.vx = random(-circle1.speed, circle1.speed);
    circle2.vx = random(-circle2.speed, circle2.speed);

    circle1.vy = random(-circle1.speed, circle1.speed);
    circle2.vy = random(-circle2.speed, circle2.speed);
}



function draw() {
    background(0);

    move();
    checkOffscreen();
    checkOverlap();
    display();
}

function move() {
    circle1.x += circle1.vx;
    circle1.y += circle1.vy;

    circle2.x += circle2.vx;
    circle2.y += circle2.vy;
}

function checkOffscreen() {
   // Check if the circles have gone offscreen 
   if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
    // SAD ENDING 
}  
}

function checkOverlap() {
     // Check if the circles overlap
     let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
     if (d < circle1.size/2 + circle2.size/2) {
         // LOVE ENDING 
     }
}

function display() {
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
}