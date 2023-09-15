/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
}


/**
 * Description of draw()
*/
function draw() {
    background(mouseX, 0, mouseY, 10);
    rectMode(CENTER);
    noStroke();
    fill(255 , 0 , 0 , 88);
    rect(mouseX, mouseY, 100, 100);

}