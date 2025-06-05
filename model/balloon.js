export class HotAirBalloon {
    constructor(x, y, width, height) {
        this.center_x = x;
        this.center_y = y;
        this.width = width;
        this.height = height;
        // Create one balloon
        this.balloon = new Balloon(this.x, this.y, this.width, this.height);
        // create one basket
        this.basket = new Basket(new Point(this.balloon.x - (this.balloon.width / 8), this.balloon.y + 150), new Point(this.balloon.x + this.balloon.width / 8, this.balloon.y + 150));
        // Create one tentacle hanging from the bottom-center of the balloon
        this.tentacle = new Tentacle(this.balloon.x, this.balloon.y + this.balloon.height / 2, this.basket.attachmentPoint1.x, this.basket.attachmentPoint1.y);
        this.tentacle2 = new Tentacle(this.balloon.x, this.balloon.y + this.balloon.height / 2, this.basket.attachmentPoint2.x, this.basket.attachmentPoint2.y);
        this.tentacle3 = new Tentacle(this.balloon.x, this.balloon.y + this.balloon.height / 2, this.basket.attachmentPoint3.x, this.basket.attachmentPoint3.y);
        this.tentacle4 = new Tentacle(this.balloon.x, this.balloon.y + this.balloon.height / 2, this.basket.attachmentPoint4.x, this.basket.attachmentPoint4.y);
    }
}

export class Balloon {
    constructor(x, y, radius) {
        this.center_x = x;
        this.center_y = y;
        this.radius = radius;
    }

    generateBalloonPoints(){
        // drawTopHalfOctopusBody(center_x, center_y){
        // beginShape();
        let radius = this.radius;
        let points = [];
        let total_degrees = 360;
        while (radius < 75){
            for (let i = 0; i < total_degrees; i++) {
                let angle = radians(i);
                // noise is a p5.js function. Does this mean generateBalloonPoints belongs in renderers?
                // I'm trying to keep models free of p5.js library.
                let noiseFactor = noise(i * 0.02, float(frameCount) / 150);
                let x = this.center_x + this.radius * cos(angle) * noiseFactor;
                let y = this.center_y + this.radius * sin(angle) * noiseFactor;
                points.push({x, y});
                console.log(`x: ${x}, y: ${y}`);

                // curveVertex(xPoint, yPoint);
                radius += 1;
            }
            // if (radius == 75) {
            //     stroke(100, 20);
            //     endShape(CLOSE);
            //     noLoop();
            // }
            
        }
        return points
        //what happens if you move this into draw()?
            // endShape(CLOSE);
        //   }
    }
}


export class Tentacle {
    constructor(x, y, a, b) {
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
    }
}
  
export class Basket{
    constructor(corner1, corner2) {
        this.corner1 = corner1;
        this.corner2 = corner2;
        this.attachmentPoint1 = corner1;
        this.attachmentPoint2 = new Point(corner1.x + (corner2.x - corner1.x) / 4, corner1.y);
        this.attachmentPoint3 = new Point(corner2.x - (corner2.x - corner1.x) / 4, corner1.y);
        this.attachmentPoint4 = corner2;
    }
}

export class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
