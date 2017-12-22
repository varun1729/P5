const factor = 20;
const width = 600;
const height = 600;
const maxX = Math.floor(width / factor);
const maxY = Math.floor(height / factor);
const snakeSpeed = 7;
const foodColor = '#da433e';
const snakeColor = '#a3a143';
const backgroundColor = '#5387c6';

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    s = new Snake();
    frameRate(snakeSpeed);
    f = new Food();
}

function draw() {
    background(backgroundColor);
    s.update();
    s.show();
    f.show();
    if (s.eat(f)) {
        f = new Food();
    }
    if (s.evaluateDeath()) {
        alert("Snake boi died!");
        s = new Snake();
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        s.dir(0, -1)
    } else if (keyCode == DOWN_ARROW) {
        s.dir(0, 1)
    } else if (keyCode == LEFT_ARROW) {
        s.dir(-1, 0)
    } else if (keyCode == RIGHT_ARROW) {
        s.dir(1, 0)
    }
}

class Snake {
    constructor() {
        this.x = factor;
        this.y = factor;
        this.xDisplacement = 0;
        this.yDisplacement = 0;
        this.length = 1;
        this.history = [];
    }

    dir(x, y) {
        if (!(this.length > 1 && (this.xDisplacement === -x || this.yDisplacement === -y))) {
            this.xDisplacement = x;
            this.yDisplacement = y;
        }
    }

    update() {
        //time is 1s so its ignored
        this.x += this.xDisplacement * factor;
        this.y += this.yDisplacement * factor;

        this.x = constrain(this.x, 0 - factor, width);
        this.y = constrain(this.y, 0 - factor, height);
        this.history.push([this.x, this.y]);
        this.toBeDeleted = this.history.length - this.length
        for (var x = 0; x < this.toBeDeleted; x++) {
            this.history.shift();
        }
    }

    show() {
        stroke(backgroundColor);
        fill(snakeColor);
        for (var x = 0; x < this.length; x++) {
            rect(this.history[this.history.length - 1 - x][0], this.history[this.history.length - 1 - x][1], factor, factor);
        }
    }

    eat(f) {
        if (f.x === this.x && f.y === this.y) {
            this.length += 1;
            return true;
        }
        return false;
    }
    evaluateDeath() {
        for (var x = 0; x < this.history.length - 1; x++) {
            if (this.history[x][0] === this.x && this.history[x][1] === this.y) {
                return true;
            }
        }
        if (this.x === width || this.y === height || this.x < 0 || this.y < 0) {
            return true;
        }
        return false;
    }
}

class Food {
    constructor() {
        this.x = Math.floor(Math.random() * maxX) * factor;
        this.y = Math.floor(Math.random() * maxY) * factor;
    }
    //TODO check that food and snake don't overlap
    show() {
        noStroke();
        fill(foodColor);
        rect(this.x, this.y, factor, factor)
    }
}