import { Balloon } from './model/balloon.js';
import { renderBalloon } from './render/renderers.js';

let currentBalloon;

function setup() {
  createCanvas(400, 400);
  currentBalloon = new Balloon(width / 2, height / 2 - 50);
  createButton("New Balloon").mousePressed(() => {
    currentBalloon = new Balloon(random(width), random(height));
  });
}

function draw() {
  background(200);
  renderBalloon(currentBalloon);
}

window.setup = setup;
window.draw = draw;
