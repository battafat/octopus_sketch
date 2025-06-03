import { Balloon } from './model/balloon.js';
import { Basket } from './model/balloon.js';
import { renderBalloon, renderBasket } from './render/renderers.js';

let currentBalloon;
let basket;

function setup() {
  createCanvas(400, 400);
  currentBalloon = new Balloon(width / 2, height / 2 - 50);
  basket = new Basket(width / 2, height - 50, width / 8);
  createButton("New Balloon").mousePressed(() => {
    currentBalloon = new Balloon(random(width), random(height));
  });
}

function draw() {
  background(200);
  renderBalloon(currentBalloon);
  renderBasket(basket);
}

window.setup = setup;
window.draw = draw;
