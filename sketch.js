// model classes
import { HotAirBalloon } from './model/balloon.js';
import { Balloon } from './model/balloon.js';
import { Basket } from './model/balloon.js';
// render classes
import { renderBalloon, renderBasket, renderHotAirBallon, renderFlowerBalloon } from './render/renderers.js';

let flowerBalloon;

function setup() {
  createCanvas(400, 400);
  // currentBalloon = new HotAirBalloon(width / 2, height / 2 - 50, width / 2, height/4);
  background(50);
  // createButton("New Balloon").mousePressed(() => {
  //   currentBalloon = new Balloon(random(width), random(height));
  // });
  flowerBalloon = new Balloon(width / 2, height / 2, 200);
}

function draw() {
  background(50);
  // renderHotAirBallon(currentBalloon);
  console.log('Drawing frame');
  renderFlowerBalloon(flowerBalloon);
}

window.setup = setup;
window.draw = draw;
