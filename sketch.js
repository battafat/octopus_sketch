// model classes
import { HotAirBalloon } from './model/balloon.js';
import { Balloon } from './model/balloon.js';
import { Basket } from './model/balloon.js';
// render classes
import { renderBalloon, renderBasket, renderTentacle, renderHotAirBalloon, renderFlowerBalloon } from './render/renderers.js';
let flowerBalloonTopHalfPoints;
let flowerBalloon;
let cachedCircles;
let hotAirBalloon;
function setup() {
  createCanvas(800, 800);
  // currentBalloon = new HotAirBalloon(width / 2, height / 2 - 50, width / 2, height/4);
  background(50);
  // createButton("New Balloon").mousePressed(() => {
  //   currentBalloon = new Balloon(random(width), random(height));
  // });
  hotAirBalloon = new HotAirBalloon(width / 2, height / 2, width / 4);
  flowerBalloonTopHalfPoints = hotAirBalloon.flowerBalloonTopHalfPoints
  
  console.log("flowerBalloonTopHalfPoints", hotAirBalloon.flowerBalloonTopHalfPoints);
  // console.log(flowerBalloonTopHalfPoints[0][0]); // Inspect first point of first layer

  console.log("cachedBalloonPoints:", hotAirBalloon.cachedBalloonPoints);
  // flowerBalloon = new Balloon(width / 2, height / 2, width/4);
  // cachedCircles = flowerBalloon.generateBalloonPoints();
  noLoop();
}

function draw() {
  background(0);
  if (hotAirBalloon) {
    renderHotAirBalloon(hotAirBalloon);
  }
  console.log('Drawing frame');
  // renderFlowerBalloon(cachedCircles);
}


window.setup = setup;
window.draw = draw;
