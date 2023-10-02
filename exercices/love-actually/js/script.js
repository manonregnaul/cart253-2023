/**
 * Love Actually
 * Manon Regnault
 * 
 * We open with a title screen "Procrastination tonight?".
 * We the simulation beggins we see one police truck and one circle (the user).
 * They start moving in a random direction but when the user activate the keyboard with the space bar, the police beggins to follow us.
 * The user would have to use the arrows to avoid beeing chase by the police. 
 * If the police manage to touch us, the title "no procastination" will appear.
 * If we manage to go to the lower east side of the canvas (the spot of the police at first place) then the title "Procrastination!" would appear.
 */

"use strict";




let police = {
    x: 
    y:
    w:
    h:
    vx:
    vy:
    speed: 3

}

let user = {
    x: 
    y:
    size:
    vx:
    vy:
    speed: 3
}

let state = 'title'; // Can be: title, simulation, yes, no




function preload() {
}


// Created a canvas and our setupCircles 
function setup() {
    createCanvas (500, 500);
}


/**
 * Description of draw()
*/
function draw() {

}