export function renderHotAirBallon(hotAirBalloon){
    renderBalloon(hotAirBalloon.balloon);
    renderBasket(hotAirBalloon.basket);
    renderTentacle(hotAirBalloon.tentacle);
    renderTentacle(hotAirBalloon.tentacle2);
    renderTentacle(hotAirBalloon.tentacle3);
    renderTentacle(hotAirBalloon.tentacle4);
}

export function renderBalloon(balloon){
        fill(255, 100, 150);
        noStroke();
        ellipse(balloon.x, balloon.y, balloon.width, balloon.height);
    }

export function renderFlowerBalloon(balloon){

    const points = balloon.generateBalloonPoints();
    console.log("points length:", points.length); // in renderFlowerBalloon
    noFill();
    stroke(0);
    beginShape();
    for (const point of points) {
        curveVertex(point.x, point.y);
      }
    endShape();
}

export function renderTentacle(tentacle){
    stroke(0);
    strokeWeight(4);
    line(tentacle.x, tentacle.y, tentacle.a, tentacle.b);
}

export function renderBasket(basket){
    // console.log("rendering basket at:", basket.x, basket.y, "width:", basket.width);
    fill(204, 102, 0);
    stroke(100);
    rectMode(CORNERS);
    //Draws rectangle between top left corner and bottom right corner
    rect(basket.corner1.x, basket.corner1.y, basket.corner2.x, basket.corner2.y + (basket.corner2.x - basket.corner1.x));
}