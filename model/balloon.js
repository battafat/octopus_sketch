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

    generateBalloonPoints() {
        const allPoints = [];
        const totalDegrees = 360;

        for (let r = 0; r <= this.radius; r += 1) {
            const circlePoints = [];

            for (let i = 0; i < totalDegrees; i++) {
                const angle = radians(i);
                const noiseFactor = noise(i * 0.02, float(frameCount) / 150);
                const x = this.center_x + r * cos(angle) * noiseFactor;
                const y = this.center_y + r * sin(angle) * noiseFactor;
                circlePoints.push({ x, y });
            }

            allPoints.push(circlePoints);
        }

        return allPoints; // Array of arrays of points
      }
        //what happens if you move this into draw()?
            // endShape(CLOSE);
        //   }
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
