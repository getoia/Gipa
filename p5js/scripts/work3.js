function setup() {
  createCanvas(500, 500);
  stroke(0, 0, 0, 15);
}

function draw() {
  // draw two random chords each frame
  drcircle(20);
  drcircle(40);
}

function drcircle(offset) {
  // find a random point on a circle
  let angle1 = random(0, 2 * PI);
  let xpos1 = 250 + offset * cos(angle1);
  let ypos1 = 250 + offset * sin(angle1);

  xpos2=random(500);
  ypos2=random(500);

  // draw a line between them
  line(xpos1, ypos1, xpos2, ypos2);
}
