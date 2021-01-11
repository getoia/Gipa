function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  fill("black");
  for (let i = 1; i < 40; i++) {
    for (let j = 1; j < 40; j++) {
      let r = random(10);
      circle(i * 10, j * 10, r);
    }
  }
}
