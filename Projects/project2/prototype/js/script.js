/**
 * Project 2 prototype: Visual Experimentation
 * Manon Regnault
 * 
 * 
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
let binaries = [];



function preload() {

// Load the image of my title state
    moiImage = loadImage("assets/images/moi.png");

// Load the images of my first part
for (let i = 0; i < 8; i++) {
    binaries[i] = loadImage("assets/images/binaries/binary" + i + ".png");
}

    binary1 = loadImage("assets/images/bereniceSourire.png");
    

}



function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < 8; i++) {
        let x = random(10, 490);
        let y = random(0, 100);
        let r = random (60, 100);
        let binary = new Binaries(x, y, r);
        Binaries.push(binary); 
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

    for (let i = 0; i < binaries.length; i++) {
        binaries[i].move();
        binaries[i].show();
    }
}





function mousePressed() {
    if (mouseX, mouseY = moiImage) {
        state = 'firstPart'
    }



}