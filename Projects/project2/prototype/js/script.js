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

let circle = {
    x: 340,
    y: 310,
    size: 30, 
}



// Created a class for my black and white images 
let bubbles = [];
let binaries = [];



function preload() {

// Load the image of my title state
    moiImage = loadImage("assets/images/moi.png");

   // binary0 = loadImage("assets/images/binary0.png");
   // binary1 = loadImage("assets/images/binary1.png");
   //binary2 = loadImage("assets/images/binary2.png");
   // binary3 = loadImage("assets/images/binary3.png");
   // binary4 = loadImage("assets/images/binary4.png");
//binary5 = loadImage("assets/images/binary5.png");
   // binary6 = loadImage("assets/images/binary6.png");
   // binary7 = loadImage("assets/images/binary7.png");



// Load the images of my first part
    for (let i = 0; i < 8; i++) {
        binaries[i] = loadImage("assets/images/binary" + i + ".png");
 }
}




function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < 18; i++) {
        let x = random(10, 490);
        let y = random(0, 100);
        let r = random(10, 300);
        let vx = random (0.1, 1);
        let vy = random (0.1, 1);
        let maxSpeed = 2;
        let speed = 1;

        let b = new Bubbles(x, y, r, vx, vy, maxSpeed, speed);
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

    // Display my title
    push();
    textSize(20);
    noStroke();
    fill(purpleShade.r, purpleShade.g, purpleShade.b);
    textFont('BN BOOP');
    textAlign(CENTER, CENTER);
    text('welcome to my universe', 200, height/2);
    pop();

    // Display a clicking button to clik on it
    push();
    ellipse(CENTER);
    strokeWeight(random(30,50));
    stroke(255, 34, 100, 30);
    ellipse(circle.x, circle.y, circle.size);
    fill(200, 0, 0);
    pop();

    //image(moiImage, moiImage.x, moiImage.y, moiImage.w, moiImage.h);
    image(moiImage, 330, 40, 180, 620);
}

function firstPart() {
    background(purpleShade.r, purpleShade.g, purpleShade.b, 9);

    push();
    textSize(20);
    noStroke();
    fill(pinkShade.r, pinkShade.g, pinkShade.b);
    textFont('BN BOOP');
    textAlign(CENTER, CENTER);
    text('next', 460, 30);
    pop();

 

   // image(binary0, mouseX, mouseY);

   for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
   }

   push();
   //background(purpleShade.r, purpleShade.g, purpleShade.b, 0);
   textSize(13);
   stroke(255);
   noCursor();
   fill(0)

   //fill(pinkShade.r, pinkShade.g, pinkShade.b, );
   textFont('JetBrains Mono');
   textAlign(CENTER, CENTER);
   text('not everything is black or white', mouseX, mouseY);
   pop();
 
}





function mousePressed() {
   
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < circle.size) {
        state = 'firstPart'
    }

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}