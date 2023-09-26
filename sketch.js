let verticalLinesX = [];
let horizontalLinesY = [];
let numLines = 100;
let speed = 1;
let t = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    frameRate(100);
    initializeLines();

}

function initializeLines() {
    // Initialize vertical lines
    for (let i = 0; i < numLines; i++) {
        verticalLinesX[i] = i * width / numLines;
    }

    // Initialize horizontal lines
    for (let i = 0; i < numLines; i++) {
        horizontalLinesY[i] = i * height / numLines;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    initializeLines();
}

function mousePressed() {
    translate(mouseX, mouseY);


}

function draw() {
    push();
    if (frameCount / 100 % 2 == 0) {
        background(255);
        rotate(cos(5));
    };
    pop();
    if (mouseIsPressed) {
        mousePressed();
    }
    // background(0, 0, 25);
    //strokeWeight(1);
    strokeWeight(t * 0.02);
    t += .5;
    noStroke();

    for (r = 1; r < TAU * 20; r += 0.2) {
        push() + translate(cos(r) * r * 9 + 360, sin(r) * r * 9 + 360 + (T = tan(r / 20 - t * 9) * 5))
            + translate(width / 4, height / 4)
            + fill(255, -T * 99) + rotate(r * 100)
            + textSize(int(r) * 0.45)
            // + line(0, 0, 9 / T, 9 / T)
            //+ ellipse(0, 0, 9 / T + r, 9 / T)
            + text(String.fromCodePoint(128000 + int(r * .55 % 1164)), -T, 9 / T)
            + pop();
    }
    fill(255);
    // Draw and move vertical lines
    stroke(0);
    // for (let i = 0; i < verticalLinesX.length; i += (0.1)) {
    //     strokeWeight(0.1);
    //     line(verticalLinesX[i], 0, verticalLinesX[i], height / 2);
    //     verticalLinesX[i] += speed / i;


    //     // Reset line position when it goes out of canvas
    //     if (verticalLinesX[i] > width || verticalLinesX[i] < 0) {
    //         verticalLinesX[i] = 0;
    //     }
    //     line(100, 0, 100, height);
    //     strokeWeight(0.5);
    //     line(120, 0, 120, height);
    //     line(200, 0, 200, height);
    // }
    //rotate(cos(45));

    // Draw and move horizontal lines
    // for (let i = 0; i < horizontalLinesY.length; i += (2.8)) {
    //     strokeWeight(1);
    //     line(0, horizontalLinesY[i], width / 4, horizontalLinesY[i]);
    //     horizontalLinesY[i] -= speed / 10;
    //     //noFill();
    //     //fill(150, 75, 50);
    //     fill(255);
    //     //stroke(0);
    //     // text("purpose-driven streetwear.", width / 2 + 5 * i * 0.25, 250);

    //     // Reset line position when it goes out of canvas
    //     if (horizontalLinesY[i] > height) {
    //         horizontalLinesY[i] = 0;
    //     } else if (horizontalLinesY[i] < 0) {
    //         horizontalLinesY[i] = height;
    //     }
    //     line(0, 100, width, 100);
    //     strokeWeight(1);
    //     line(0, 120, width, 120);
    // }

    fill(0, 0, 0);
    // textSize(width / 25);
    // textAlign(CENTER);
    // text("Amāra", width / 2, height / 12);
    // fill(255);
    // text("Amāra", width / 2 + 5, height / 12 + 5);
    // fill(255);
    // rotate(sin(60));
    // text("purpose-driven streetwear.", width / 2, height / 4);
    // fill(255);


}
