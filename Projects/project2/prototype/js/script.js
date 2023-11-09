/**
 * Project 2 prototype: Visual Experimentation
 * Manon Regnault
 * 
 * This prototype consist in exploring my abilities in using images to my program. 
 * My first consiste in the title. By clicking in the title, the user should be redirected 
 * throught a new page exploring moving black and whites images that I took. The user can 
 * click on the image of his choice in order to change the image. Furthermore, each image would 
 * slowy fall out of the canvas. 
 * 
 * If I'll be able to make it, the mouse would disperse a sentence on the canvas and you will 
 * be able to see the text more clearly the mouse stops. It is saying "not everything is black and white"
 * 
 * For this prototype I was helped  by the coding train code (https://www.youtube.com/watch?v=i2C1hrJMwz0). 
 */

"use strict";



let state = 'title' // Can also be firstPart, secondPart, thirdPart

// 2 differents shades for the background
let pinkShade = {
    r: 238, 
    g: 130,
    b: 238
}

let purpleShade = {
    r: 116, 
    g: 31, 
    b: 56
}

// Created variable for my first state of my program 
let moiImage = {
    x: 330,
    y: 40,
    w: 180,
    h: 620
}



// Created a class for my black and white images 
let bubbles = [];
let binaries = [];



function preload() {

// Load the image of my title state
    moiImage = loadImage("assets/images/moi.png");

    //binary0 = loadImage("assets/images/binaries/binary0.png");

// Load the images of my first part
  // for (let i = 0; i < 8; i++) {
   // binaries[i] = loadImage(`assets/images/binaries/binary${i}.jpg`);


}




function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < 8; i++) {
        let x = random(10, 490);
        let y = random(0, 100);
        let r = random (60, 100);
        let b = new Bubbles(x, y, r);
        bubbles.push(b); 
    }
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
    
    background(pinkShade.r, pinkShade.g, pinkShade.b);

    push();
    textSize(20);
    noStroke();
    fill(purpleShade.r, purpleShade.g, purpleShade.b);
    textFont('BN BOOP');
    textAlign(CENTER, CENTER);
    text('welcome to my universe', 200, height/2);
    pop();

    //image(moiImage, moiImage.x, moiImage.y, moiImage.w, moiImage.h);
    image(moiImage, 330, 40, 180, 620);
}

function firstPart() {
    background(purpleShade.r, purpleShade.g, purpleShade.b);

    push();
    textSize(15);
    noStroke();
    fill(pinkShade.r, pinkShade.g, pinkShade.b);
    textFont('BN BOOP');
    textAlign(CENTER, CENTER);
    text('next', 460, 480);
    pop();

    push();
    textSize(7);
    noStroke();
    fill(255);
    textFont('JetBrains Mono');
    textAlign(CENTER, CENTER);
    text('not everything is black or white', mouseX, mouseY);
    pop();

    image(binary0, mouseX, mouseY);

   // for (let i = 0; i < bubbles.length; i++) {
  //      bubbles[i].move();
   //     bubbles[i].show();
  //  }
}





function mousePressed() {
    if (mouseX, mouseY = moiImage) {
        state = 'firstPart'
    }

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}