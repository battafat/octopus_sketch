let balloon;

function setup() {
  createCanvas(400, 400);
  balloon = new Balloon(width / 2, height / 2 - 50);
}

function draw() {
  background(200);
  balloon.show();
}
