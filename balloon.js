class attachmentPoint{

}

class Balloon {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        // Create one tentacle hanging from the bottom-center of the balloon
        this.tentacle = new Tentacle(this.x, this.y + 75);
    }

    show() {
        fill(255, 100, 150);
        noStroke();
        ellipse(this.x, this.y, 150, 150);

        // Show the tentacle
        this.tentacle.show();
    }
  }
class Tentacle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = 60;
    }

    show() {
        stroke(0);
        strokeWeight(4);
        line(this.x, this.y, this.x, this.y + this.length);
    }
}
  
