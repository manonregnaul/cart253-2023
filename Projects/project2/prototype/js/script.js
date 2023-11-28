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



let charlotte; 
let kayle;

let balls = [];


// Created an array for my black and white images 
let bubbles = [];
let binaries = [];


// Created an array for my Kayle and Charlotte images 
let charlotteImages = [];
let kayleImages = [];

function preload() {

// Load the image of my title state
    moiImage = loadImage("assets/images/moi.png");




// Load the images of my first part
    for (let i = 0; i < 8; i++) {
        binaries[i] = loadImage("assets/images/binary" + i + ".png");
 }

// Load the images of my second part 
    charlotte = loadImage("assets/images/concordian0.png")
    kayle = loadImage("assets/images/concordian1.png");


   


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

    for (let i = 0; i < 5; i++) {
        let ball = new BouncingBall(
          random(width),
          random(height),
          20,
          random(-2, 2),
          random(-2, 2)
        );
        balls.push(ball);
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
    else if (state === 'secondPart'){
        secondPart();
    }
    else if (state === 'thirdPart'){
        thirdPart();
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
    background(0,0,0, 5);

    push();
    textSize(16);
    noStroke();
    fill(pinkShade.r, pinkShade.g, pinkShade.b);
    textFont('BN BOOP');
    textAlign(CENTER, CENTER);
    text('next', 460, 30);
    pop();

 



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


function secondPart() {
    //background(pinkShade.r, pinkShade.g, pinkShade.b, 10);

    

      // Generate and display Charlotte images
      for (let i = 0; i < 10; i++) { // Adjust the number of images as needed
        charlotteImages.push({
            x: random(width),
            y: random(height),
        });
    }

    // Generate and display Kayle images
    for (let i = 0; i < 10; i++) { // Adjust the number of images as needed
        kayleImages.push({
            x: random(width),
            y: random(height),
        });
    }

    // Display Charlotte images
    for (let img of charlotteImages) {
        image(charlotte, img.x, img.y, 60, 60);
    }

    // Display Kayle images
    for (let img of kayleImages) {
        image(kayle, img.x, img.y, 60, 60);
    }

    background(0, 80);

    push();
    textSize(20);
    noStroke();
    fill(pinkShade.r, pinkShade.g, pinkShade.b);
    textFont('BN BOOP');
    textAlign(CENTER, CENTER);
    text('next', 460, 30);
    pop();



   push();
   textSize(10);
   noStroke();
   noCursor();
   fill(255);
   textFont('JetBrains Mono');
   textAlign(CENTER, CENTER);
   text('everything is a question of smile', mouseX, mouseY);
   pop();

}

function thirdPart() {

    background(purpleShade.r, purpleShade.g, purpleShade.b, 9);

    push();
    textSize(13);
    stroke(255);
    noCursor();
    fill(0)
    textFont('JetBrains Mono');
    textAlign(CENTER, CENTER);
    text('overthinking!', mouseX, mouseY);
    pop();
    
    image(moiImage, 200, 150, 75, 200);

    for (let ball of balls) {
        ball.move();
        ball.display();
      }
}

   


function mousePressed() {
    let d = dist(mouseX, mouseY, circle.x, circle.y);

    if (d < circle.size) {
        state = 'firstPart';
    } else if (state === 'firstPart' && mouseX > 430 && mouseX < 490 && mouseY > 15 && mouseY < 45) {
        state = 'secondPart';
    } else if (state === 'secondPart' && mouseX > 430 && mouseX < 490 && mouseY > 15 && mouseY < 45) {
        state = 'thirdPart';
    }

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }

    for (let ball of balls) {
        ball.clicked(mouseX, mouseY);
      }


    if (state === 'thirdPart') {
        // Créer une nouvelle balle avec des propriétés aléatoires
        let newBall = new BouncingBall(
          random(width),
          random(height),
          20,
          random(-2, 2),
          random(-2, 2)
        );
    
        // Ajouter la nouvelle balle au tableau balls
        balls.push(newBall);
      }
}