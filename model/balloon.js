export class HotAirBalloon {
    center_x;
    center_y;
    radius;
    balloon;
    cachedBalloonPoints;
    flowerBalloonTopHalfPoints;
    balloonAttachmentPoints;
    basket;
    tentacle;
    tentacle2;
    tentacle3;
    tentacle4;

    constructor(x, y, radius) {
        this.center_x = x;
        this.center_y = y;
        this.radius = radius;
        // this.width = width;
        // this.height = height;
        // Create one balloon
        this.balloon = new Balloon(this.center_x, this.center_y, this.radius);
        this.cachedBalloonPoints = this.balloon.generateBalloonPoints();
        this.flowerBalloonTopHalfPoints = this.balloon.generateFlowerBalloonTopHalfPoints(this.cachedBalloonPoints, 50, 0);
        
        // this.topHalfAttachmentPoints = this.flowerBalloonTopHalfPoints[1];
        const balloonAttachmentPoints = this.balloon.getBalloonAttachmentPoints(this.flowerBalloonTopHalfPoints);
        // unpack BalloonAttachmentPoints. 
        const [balloonAttach1, balloonAttach2, balloonAttach3, balloonAttach4] = balloonAttachmentPoints;
        // create one basket
        this.basket = new Basket(new Point(this.balloon.x - (this.balloon.radius / 8), this.balloon.y + 150), new Point(this.balloon.x + this.balloon.radius / 8, this.balloon.y + 150));
        // Create one tentacle hanging from the bottom-center of the balloon
        this.tentacle = new Tentacle(balloonAttach1.x, balloonAttach1.y, this.basket.attachmentPoint1.x, this.basket.attachmentPoint1.y);
        this.tentacle2 = new Tentacle(balloonAttach2.x, balloonAttach2.y, this.basket.attachmentPoint2.x, this.basket.attachmentPoint2.y);
        this.tentacle3 = new Tentacle(balloonAttach3.x, balloonAttach3.y, this.basket.attachmentPoint3.x, this.basket.attachmentPoint3.y);
        this.tentacle4 = new Tentacle(balloonAttach4.x, balloonAttach4.y, this.basket.attachmentPoint4.x, this.basket.attachmentPoint4.y);
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
                const y = this.y + r/2 * sin(angle) * noiseFactor;
                circlePoints.push({x, y});
            }
            mimickFrameCount += 1;
            allPoints.push(circlePoints);
        }


        return allPoints; // Array of arrays of points
    }

    generateFlowerBalloonTopHalfPoints(allCircles, lastCircle, yOffSet){
        const pointsForFlowerBalloonTopHalf = [];
        for (let i = allCircles.length - 1; i >=lastCircle; i--){
            let currentCircle = this.renderOneCircle(allCircles[i], yOffSet);
            pointsForFlowerBalloonTopHalf.push(currentCircle);
            yOffSet -= .75
        }
        // topmostCirclePoints = pointsForFlowerBalloonTopHalf[pointsForFlowerBalloonTopHalf.length-1];
        return pointsForFlowerBalloonTopHalf;
    }

    // generateFlowerBallonBottomHalfPoints(){

    // }
    renderOneCircle(oneCircle, yOffSet) {
        let currentCircle = [];
        for (const point of oneCircle) {
            // const newY = point.y + yOffSet;
            // const newX = point.x;
            currentCircle.push({x: point.x, y: point.y + yOffSet}); // use vertex or curveVertex
        }
        return currentCircle;
    }

    getBalloonAttachmentPoints(circlesList) {
        const fourPoints = [];
        const opening = circlesList[45];
        if (opening.length >= 360) {
            fourPoints.push(opening[180]);
            fourPoints.push(opening[100]);
            fourPoints.push(opening[80]);
            fourPoints.push(opening[0]);
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
