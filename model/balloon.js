export class HotAirBalloon {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // Create one balloon
        this.balloon = new Balloon(this.x, this.y, this.width, this.height);
        // creat one basket
        this.basket = new Basket(this.balloon.x, this.balloon.y + 100, this.balloon.width / 4);
        // Create one tentacle hanging from the bottom-center of the balloon
        this.tentacle = new Tentacle(this.balloon.x, this.balloon.y + this.balloon.height / 2, this.basket.x, this.basket.y - this.basket.width / 2);
    }
}

export class Balloon {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
    constructor(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;
    }
}
