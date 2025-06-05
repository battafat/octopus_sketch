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

export function renderFlowerBalloon(balloon) {
    const allCircles = balloon.generateBalloonPoints();

    noFill();
    stroke(0, 100); // Add some alpha if needed
    strokeWeight(1);

    for (const circle of allCircles) {
        beginShape();
        for (const point of circle) {
            vertex(point.x, point.y); // use vertex or curveVertex
        }
        endShape(CLOSE);
    }
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