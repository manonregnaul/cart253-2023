/**
 * Exercice 2 : Dodge Em
 * Manon Regnault
 * 
 * Improve the Covid-19 "simulation" activity with a new interaction style, new visuals, and even a new meaning 
 */

"use strict";

let bg = {
    r: 8,
    g: 0,
    b: 100 
}

let bootsImage = {
    x: 250,
    y: 250,
    size: 85
}

let police = {
    x: 0, 
    y: 250, 
    w: 100,
    h: 70,
    size: 100, 
    vx: 0, 
    vy: 0, 
    ax: 0, 
    ay: 0,
    speed: 10, 
    
}

let numStatic = 100; 

/**
 * Preload my boot image 
*/
function preload() {
    bootsImage = loadImage("assets/images/boots.PNG");

}



/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500); 

    police.y = random (0, 400);
    police.vx = police.speed;

    noCursor();
}


/**
 * Description of draw()
*/
function draw() {
    background(bg.r, bg.g, bg.b), 

   // Display static

  // for(let i = 0; i < numStatic; i++) {
    //let x = random(0, width);
    //let y = random(0, height);
    //stroke(255, 0, 100);
   // point(x,y);
//}


    // Display boots image (user manipulation)
    imageMode(CENTER);
    image(bootsImage, mouseX, mouseY, 85, 85);



    // Display police speed
    police.x = police.x + police.speed;
    police.y = police.x - police.speed;
   

    // Condition to not go out of the canvas
    if(police.x > 400) {
        police.speed = -police.speed;
   }

    if(police.x < 0) {
    police.speed = -police.speed;
   }

   


   // If the police appears in the center of the canvas, it turns red
   if(police.x > 400/3){
    if(police.x < 2 * 400/3){
        fill(255, 0, 0);
    }
   }


    rect(police.x, police.y, police.w, police.h, 20); 
    stroke(255, 255, 255);
    strokeWeight(5);
    fill(0, 0, 255)

    // Check for catching the police
    let d = dist(bootsImage.x, bootsImage.y, police.x, police.y)
    if (d < police.size + bootsImage.size) {
        noLoop(); 
}

}

function mousePressed() {
    bg.r = random(100, 200);
    bg.g = random (0, 150);
    bg.b = random (100, 200);

}
