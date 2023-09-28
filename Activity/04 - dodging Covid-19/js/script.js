/**
 * Activity Dodging Covid-19
 * Manon Regnault
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let covid19 = {
    x: 0,
    y: 250, 
    size: 100, 
    vx: 0, 
    vy: 0, 
    speed: 5, 
    fill: {
        r: 255, 
        g: 0, 
        b: 0
    }
}


function preload() {

}


/**
 *  Created a canvas et our covid19 variable somewhere randomly 
*/
function setup() {
     createCanvas(windowWidth, windowHeight);

     covid19.y = random(0, height); 
     covid19.vx = covid19.speed; 
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    ellipse(covid19.x, covid19.y, covid19.size)



}