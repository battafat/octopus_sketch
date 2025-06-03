
export function renderBalloon(balloon){
        fill(255, 100, 150);
        noStroke();
        ellipse(balloon.x, balloon.y, 150, 150);

        // Show the tentacle
        renderTentacle(balloon.tentacle);
    }

export function renderTentacle(tentacle){
    stroke(0);
    strokeWeight(4);
    line(tentacle.x, tentacle.y, tentacle.x, tentacle.y + tentacle.length);
}

export function renderBasket(basket){
    // console.log("rendering basket at:", basket.x, basket.y, "width:", basket.width);
    fill(204, 102, 0);
    rectMode(CENTER);
    square(basket.x, basket.y, basket.width);
}