let rows;
let cols;
let scl = 20;
let w = 4000;
let h = 4000;
let terrain = [];
let flying = 0;

function setup() {
    createCanvas(1903, 949, WEBGL);
    cols = w / scl;
    rows = h / scl;
}

function draw() {
    flying = flying - 0.1;

    yoff = flying;
    for (let y = 0; y < rows; y++) {
        xoff = 0;
        for (let x = 0; x < cols; x++) {
            if (terrain[x] === undefined) {
                terrain[x] = [];
            }
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -150, 150);
            xoff = xoff + 0.15;
        }
        yoff = yoff + 0.15;
    }

    frameRate(120);
    background(0);
    noFill();
    stroke(255, 204, 100);

    rotateX(PI / 3);

    translate(-w / 2, -h / 2);
    for (let y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
        endShape();
    }
}
