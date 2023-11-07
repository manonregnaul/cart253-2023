/**
 * Project 2 prototype: Visual Experimentation
 * Manon Regnault
 * 
 * 
 */

"use strict";

// Created variable for my first state of my program 
let moiImage;

// Created variables for my second state of my program

function preload() {
    moiImage = loadImage("assets/images/moi.png");
}



function setup() {
    createCanvas(windowWidth, windowHeight);
}


/**
 * Description of draw()
*/
function draw() {
    background(238, 130, 238);

    image(moiImage, windowWidth/1.3, 60, 400, 1200);

    
}