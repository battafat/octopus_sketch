export function renderHotAirBalloon(hotAirBalloon){
    renderFlowerBalloon(hotAirBalloon.cachedBalloonPoints);
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
    // stroke(175, 75); // Add some alpha if needed
    strokeWeight(.5);
    let yOffSet = 0;
    let lastCircle = 45;
    const color1 = color('orange');
    const color2 = color('purple');
    
    beginShape();
    for (let i = allCircles.length - 1; i >= lastCircle; i--) {
        // Draws the 360 points of whichever circle it's on.
        // beginShape();
        // renderOneCircle(allCircles[i], yOffSet, i % 2 === 0 ? orange : purple);
        let strokeColor = i % 2 === 0 ? color1 : color2;
        stroke(strokeColor);
        beginShape();
        renderOneCircle(allCircles[i], yOffSet);
        endShape();
        // for (const point of allCircles[i]) {
        //     curveVertex(point.x, point.y + yOffSet); // use vertex or curveVertex
        // }
        // endShape();
        yOffSet -= .75;
        // xOffSet -= 1;
        
    }
    endShape();
    yOffSet = 0;
    const stoppingPoint = 100;

    beginShape();
    // render the bottom half
    for (let i = allCircles.length - 1; i >= stoppingPoint; i--) {
        // beginShape();
        for (const point of allCircles[i]) {
            curveVertex(point.x, point.y + yOffSet); // use vertex or curveVertex
        }
        // endShape();
        // might be worth making this into a separate function?
        // either a separate function that draws the the halves, bottom with smaller yOffSet. 
        // OR generate a separate set of points for the bottom and top halves
        yOffSet += .25;
    }
    // stroke(200);
    endShape();
}
      
// export function renderOneCircle(oneCircle, yOffSet, strokeColor){
export function renderOneCircle(oneCircle, yOffSet) {
    // stroke(strokeColor);
    // beginShape();
    for (const point of oneCircle) {
        curveVertex(point.x, point.y + yOffSet); // use vertex or curveVertex
    }
    // endShape();
}

export function renderTentacle(tentacle){
    stroke(175, 75);
    strokeWeight(1);
    line(tentacle.x, tentacle.y, tentacle.a, tentacle.b);
}

export function renderBasket(basket){
    // console.log("rendering basket at:", basket.x, basket.y, "width:", basket.width);
    fill(204, 102, 0, 50);
    stroke(175, 75);
    strokeWeight(3);
    rectMode(CORNERS);
    //Draws rectangle between top left corner and bottom right corner
    rect(basket.corner1.x, basket.corner1.y, basket.corner2.x, basket.corner2.y + (basket.corner2.x - basket.corner1.x));
}