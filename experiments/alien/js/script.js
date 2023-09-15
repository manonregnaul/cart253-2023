/**
 * Alien experimentation 
 * Manon Regnault
 * 
 * This is a an experimentation of an alien drawing.
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Draw a canvas and a background
*/
function setup() {

    createCanvas(500, 500);
    background (27, 245, 158);

}


/**
 * Draws an alien 
*/
function draw() {
    // Change the color of the background with the mouse
    background (mouseX, mouseY);

  /*

    //Draw the (left) chin of the alien
    translate(width/2, height/2);
    rotate(45);
    ellipseMode(CENTER);
    noStroke();
    fill(mouseX, mouseY, random(10,100));
    ellipse(50, 80, 200, 100);
    rotate(-45);
    translate(-width/2, -height/2);

    //Draw the (right) chin of the alien 

    translate(width/2, height/2);
    rotate(-45);
    ellipseMode(CENTER);
    noStroke();
    fill(mouseX, mouseY, random(10,100));
    ellipse(-50, 80, 200, 100);
    rotate(-45)
    translate(-width/2, -height/2);

    //Draw the forehead of the alien 

    ellipseMode(CENTER);
    fill(mouseX, random(10,100));
    ellipse(260, 260, 275, 275);à*/

    //Draw the (left) eye of the alien 
push();
    //rotate(100);à
    rotate(-25);
    ellipseMode(CENTER)
    stroke(0, 0, 255)
    fill(0, 0, 0)
    ellipse(width/2, height/2, 100, 50)
    rotate(50);
    ellipse(width/2+100, height/2+100, 100, 50)
    ellipse(5, -60, 50, 100);
    rotate(25);
pop()

push()

rotate(45);
ellipse(50, 80, 200, 100);
// draw chin 

// rotate
rotate(-90);
// draw other chin
ellipse(50, 80, 200, 100);

pop()
    



}