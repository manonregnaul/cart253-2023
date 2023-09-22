/**
 * E1: I like to move it
 * Manon Regnault
 * 
 * Create a program full of shapes that move, change size and color, and anything else you want to experiment with.
 */

"use strict";

     // Declare the scene variables (background mostly)

let bg = {
    r: 7,
    g: 198,
    b: 255,
    alpha: 100
};

let fillColor = {
    r: 7,
    g: 198, 
    b: 255
}

let floor = {
    x: 0, 
    y: 400, 
    w: 500, 
    h: 100, 
    r: 7,
    g: 255,
    b: 255,
    alpha: 100,
    fillColor: 0
};

//Declare circles variables and objects

let circle1 = {
    x: 120 , 
    y: 250,
    size: 75,
    r: 253,
    g: 126,
    b: 124,
    alpha: 99,
    growthRate: 1/2, 
    speed: 1/2,
    alpha: 88
};

let circle2 = {
    x: 225,
    y: 250, 
    size: 150, 
    r: 253,
    g: 100,
    b: 100,
    alpha: 35,
    speed: 1/3,
    speed: 1

 };


let circle3 = {
    x: 400,
    y: 250,
    size: 100,
    r: 230,
    g: 100,
    b: 100,
    speed: 1,
    fillColor: 100
}

let circle4 = {
    x: 278,
    y: 250,
    size: 70,
    r: 230,
    g: 100,
    b: 100,
    speed: 1/2,
    fillColor: 100
}

let circle5 = {
    x: 65,
    y: 250,
    size: 100,
    r: 230,
    g: 126,
    b: 124,
    speed: 1/3,
    fillColor: 100
}


/**
 * Description of preload
*/
function preload() {
}


/**
 * Created a canvas without stroke.
*/

function setup() {

    createCanvas(500, 500);
    noStroke();
    
}


/**
 * This drawing represents 5 balls that falls in the canvas. The balls change size with the mouvement of
 * the mouse but it never more than the size of the Canvas. The ball fall no lower than the canvas.
*/
function draw() {
    
    //Background
    //background(bg.r, bg.g, bg.b, bg.alpha);
    background(0, 100, mouseX , mouseY);
    //fill(0, 0, mouseY, mouseX);
   // ellipse(mouseX, mouseY, 100);


    // Rectangle 
    fill(floor.r, floor.g, floor.b, floor.alpha);
    rect(floor.x, floor.y, floor.w, floor.h);


    // Circle 1
    fill(26, 0, mouseX, 100);

    ellipse(circle1.x, circle1.y, circle1.size);

    circle1.y += circle1.speed;
    circle1.y = constrain(circle1.y, 250, 485);
    circle1.size = map(mouseY, 0, height, 10, 175);


    // Circle 2
    fill(mouseY, 0, 75);

    ellipse(circle2.x, circle2.y, circle2.size);

    circle2.y += circle2.speed; 
    circle2.y = constrain(circle2.y, 250, 485);
    circle2.size = map(mouseX, 0, width, 50, 150);


    // Circle 3
    fill(mouseX, 0, 100, circle3.alpha);
    circle3.fillColor += 3;

    ellipse(circle3.x, circle3.y, circle3.size);

    circle3.y += circle3.speed;
    circle3.y = constrain(circle3.y, 250, 485);
    circle3.size = map(mouseY, 0, height, 30, 250);

    // Circle 4
    fill(26, 0, mouseX, 100);
    circle3.fillColor += 3;

    ellipse(circle4.x, circle4.y, circle4.size);

    circle4.y += circle4.speed;
    circle4.y = constrain(circle4.y, 250, 485);
    circle4.size = map(mouseY, 0, height, 30, 250);

    // Circle 5
    fill(90, 0, mouseY, mouseY);
    circle5.fillColor += 5;

    ellipse(circle5.x, circle5.y, circle5.size);

    circle5.y += circle5.speed;
    circle5.y = constrain(circle5.y, 250, 470);
    circle5.size = map(mouseY, 0, height, 30, 250);


    
}