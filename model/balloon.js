class attachmentPoint{

}

export class Balloon {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        // Create one tentacle hanging from the bottom-center of the balloon
        this.tentacle = new Tentacle(this.x, this.y + 75);
    }

    
  }
export class Tentacle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = 60;
    }
}
  
