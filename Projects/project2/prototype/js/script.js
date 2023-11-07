/**
 * Project 2 prototype: Visual Experimentation
 * Manon Regnault
 * 
 * 
 */

"use strict";

let state = 'title' // Can also be firstPart, secondPart, thirdPart

// Created variable for my first state of my program 
let moiImage;

// Created variables for my second state of my program
let bereniceSourireImage;
let julietteImage;
let chicagoImage;
let troisphotosImage;
let museeImage;
let metroImage;
let maximeAlizeeImage;
let veloAlizeeImage;


function preload() {

// Load the image of my title state
    moiImage = loadImage("assets/images/moi.png");

// Load the images of my first part
    bereniceSourireImage = loadImage("assets/images/bereniceSourire.png");
    julietteImage = loadImage("assets/images/juliette.png");
    chicagoImage = loadImage("assets/images/chicago.png");
    troisphotosImage = loadImage("assets/images/troisphotos.png");
    museeImage = loadImage("assets/images/musee.png");
    metroImage = loadImage("assets/images/metro.png");
    maximeAlizeeImage = loadImage("assets/images/maximeAlizee.png");
    veloAlizeeImage = loadImage("assets/images/veloAlizee.png");

}



function setup() {
    createCanvas(windowWidth, windowHeight);
}


/**
 * Description of draw()
*/
function draw() {

    // Called our state in a specific order
    if(state === 'title') {
        title();
    }
    else if (state === 'firstPart'){
        firstPart();
    }
   
}

function title() {
    

    background(238, 130, 238);

    push();
    textSize(70);
    noStroke();
    fill(116, 31, 56);
    textFont('BN BOOP');
    textAlign(CENTER, CENTER);
    text('welcome to my universe', width/2.4, height/2);
    pop();

    image(moiImage, windowWidth/1.3, 60, 400, 1200);
}

function firstPart() {
    background(116, 31, 56);


}





function mousePressed() {
    if (mouseX, mouseY = width/2.4, height/2) {
        state = 'firstPart'
    }
  //  else if (mouseX, mouseY) {
   //     state = 'secondPart'
    //}
}