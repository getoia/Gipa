function setup() {
  createCanvas(512, 512);
  noLoop();
}

function draw() {
  background("black");
  drawLogic(0, 512, 0, 512, 0);
}

function drawLogic(x1, x2, y1, y2, depthIndex) {
  if (depthIndex < 6) {
    for (let i = x1; i < x2; i += 1 * Math.pow(2, 7 - depthIndex)) {
      for (let j = y1; j < y2; j += 1 * Math.pow(2, 7 - depthIndex)) {
        stroke(174, 186, 186);
        fill("black");
        let r = random(7);
        let fillRand = random();
        let deepRand = random();
        if (r >= depthIndex) {
          if (fillRand > 0.75) {
            fill(174, 186, 186);
          }
          rect(i, j, Math.pow(2, 7 - depthIndex), Math.pow(2, 7 - depthIndex));
        }
        if (deepRand > 0.25 ) {
          drawLogic(
            i,
            i + Math.pow(2, 7 - depthIndex),
            j,
            j + Math.pow(2, 7 - depthIndex),
            depthIndex + 1
          );
        }
        fill("black");
      }
    }
  }
}
