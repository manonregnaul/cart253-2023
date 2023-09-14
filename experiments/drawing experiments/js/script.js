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
    createCanvas(500, 500);

    //Set the background to orange
    background(255, 138, 1);

    //Draw a flesh-colored head
    fill(250,200,200);
    ellipse(250,250,200,200);

    //Draw the eyes black
    fill(0,0,255);
    ellipse(200,250,30,30);
    ellipse(300,250,30,30);

    //Draw the mouth 
    strokeWeight(10);
    line(200,300,300,300);



}


/**
 * Description of draw()
*/
function draw() {

}