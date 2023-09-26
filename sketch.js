let verticalLinesX = [];
let horizontalLinesY = [];
let numLines = 100;
let speed = 1;
let t = 0;
let mouseFactor = 0;

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
    strokeWeight(t * 0.02);
    t += 0.005 * (mouseY / 1000);
    noStroke();

    for (r = 1; r < TAU * 20; r += 0.2) {
        push() + translate(cos(r) * r * 9 + 360, sin(r) * r * 9 + 360 + (T = tan(r / 20 - t * 9) * 5))
            + translate(width / 4, height / 4 - height / 8)
            + fill(0, -T * 99) + rotate(r * 100)
            + strokeWeight(0.1)
            + textSize(int(r) * 0.45 * 1.25)
            // + line(0, 0, 9 / T, 9 / T)
            //+ ellipse(0, 0, 9 / T + r, 9 / T)
            + text(String.fromCodePoint(128100 + (frameCount % 100) + int(r * 0.55 % 1223)), -T, 9 / T)
            + rotate(sin((frameCount / 1000))) + pop();
    }
    fill(255);
    stroke(0);

    fill(0, 0, 0);


}
