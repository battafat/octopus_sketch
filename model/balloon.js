export class HotAirBalloon {
    constructor(x, y, radius) {
        this.center_x = x;
        this.center_y = y;
        this.radius = radius;
        // this.width = width;
        // this.height = height;
        // Create one balloon
        this.balloon = new Balloon(this.center_x, this.center_y, this.radius);
        this.cachedBalloonPoints = this.balloon.generateBalloonPoints();
        this.balloonAttachmentPoints = this.balloon.getBalloonAttachmentPoints(this.cachedBalloonPoints);
        // create one basket
        this.basket = new Basket(new Point(this.balloon.x - (this.balloon.radius / 8), this.balloon.y + 150), new Point(this.balloon.x + this.balloon.radius / 8, this.balloon.y + 150));
        // Create one tentacle hanging from the bottom-center of the balloon
        
        this.tentacle = new Tentacle(this.balloonAttachmentPoints[0].x, this.balloonAttachmentPoints[0].y, this.basket.attachmentPoint1.x, this.basket.attachmentPoint1.y);
        this.tentacle2 = new Tentacle(this.balloonAttachmentPoints[1].x, this.balloonAttachmentPoints[1].y, this.basket.attachmentPoint2.x, this.basket.attachmentPoint2.y);
        this.tentacle3 = new Tentacle(this.balloonAttachmentPoints[2].x, this.balloonAttachmentPoints[2].y, this.basket.attachmentPoint3.x, this.basket.attachmentPoint3.y);
        this.tentacle4 = new Tentacle(this.balloonAttachmentPoints[3].x, this.balloonAttachmentPoints[3].y, this.basket.attachmentPoint4.x, this.basket.attachmentPoint4.y);
    }
}

export class Balloon {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    generateBalloonPoints() {
        const allPoints = [];
        // const attachmentPoints = [];
        const totalDegrees = 360;
        let mimickFrameCount = 0;
        for (let r = 0; r <= this.radius; r += 1) {
            const circlePoints = [];

            for (let i = 0; i < totalDegrees; i++) {
                const angle = radians(i);
                const noiseFactor = noise(i * 0.02, mimickFrameCount / 150);
                // const noiseFactor = noise(i * 0.02, float(frameCount) / 150);
                const x = this.x + r * cos(angle) * noiseFactor;
                const y = this.y + r * sin(angle) * noiseFactor;
                circlePoints.push({ x, y });
            }
            mimickFrameCount += 1;
            allPoints.push(circlePoints);
        }

        return allPoints; // Array of arrays of points
    }
    getBalloonAttachmentPoints(circlesList) {
        const fourPoints = [];
        const opening = circlesList[circlesList.length - 1];
        if (opening.length >= 360) {
            fourPoints.push(opening[0]);
            fourPoints.push(opening[80]);
            fourPoints.push(opening[160]);
            fourPoints.push(opening[240]);
        }
        return fourPoints;
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
