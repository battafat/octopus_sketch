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

export function renderFlowerBalloon(points) {
    // const allCircles = balloon.generateBalloonPoints();
    const allCircles = points;
    noFill();
    stroke(200, 20); // Add some alpha if needed
    strokeWeight(1);
    let yOffSet = 0;
    for (let i = allCircles.length - 1; i >= 0; i--) {
        beginShape();
        for (const point of allCircles[i]) {
            vertex(point.x, point.y + yOffSet); // use vertex or curveVertex
        }
        yOffSet -= 1;
        // xOffSet -= 1;
        // if (i >= 75){
        //     stroke(100);
        //     endShape(CLOSE);
        // }
        endShape();
    }
    yOffSet = 0;
    for (let i = allCircles.length - 1; i >= 0; i--) {
        beginShape();
        for (const point of allCircles[i]) {
            vertex(point.x, point.y + yOffSet); // use vertex or curveVertex
        }
        // might be worth making this into a separate function?
        // either a separate function that draws the the halves, bottom with smaller yOffSet. 
        // OR generate a separate set of points for the bottom and top halves
        yOffSet += .5;
        endShape();
    }
    

    // yOffSet = 0
    // for (const circle of allCircles) {
    //     beginShape();
    //     for (const point of circle) {
    //         vertex(point.x, point.y - yOffSet); // use vertex or curveVertex
    //     }
    //     yOffSet += 1;
    //     endShape(CLOSE);
    // }
    // translate(0, -frameCount);
    // for (const circle of allCircles) {
    //     beginShape();
    //     for (const point of circle) {
    //         vertex(point.x, point.y); // use vertex or curveVertex
    //     }
    //     endShape(CLOSE);
    // }
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