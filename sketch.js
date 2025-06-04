import { HotAirBalloon } from './model/balloon.js';
import { Balloon } from './model/balloon.js';
import { Basket } from './model/balloon.js';
import { renderBalloon, renderBasket, renderHotAirBallon } from './render/renderers.js';

let currentBalloon;

function setup() {
  createCanvas(400, 400);
  currentBalloon = new HotAirBalloon(width / 2, height / 2 - 50, width / 2, height/4);
  // createButton("New Balloon").mousePressed(() => {
  //   currentBalloon = new Balloon(random(width), random(height));
  // });
}

function draw() {
  background(200);
  renderHotAirBallon(currentBalloon);
}

window.setup = setup;
window.draw = draw;
