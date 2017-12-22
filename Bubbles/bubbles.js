const inc = 6.28/245;
const r = 133;
var bubbles = [];
var angle = 0;
const sizeX = 400;
const sizeY = 400;
var numOfBubbles = 1;

function setup () {
  createCanvas(400,400);  
  bubble1 = new Bubble("yellow");
  bubbles.push(bubble1);
  bubble2 = new Bubble("lightpink");
  bubbles.push(bubble2);
  bubble3 = new Bubble("lightgreen");
  bubbles.push(bubble3);
  bubble4 = new Bubble("orange");
  bubbles.push(bubble4);
  bubble5 = new Bubble("lightblue");
  bubbles.push(bubble5);
  numOfBubbles = bubbles.length;
}

function draw () {
  background(200);
  for (var x = 0; x < numOfBubbles; x++)
  {
    bubbles[x].move(r*cos(angle/(x+1)), r*sin(angle/(x+1)));
  	bubbles[x].display();
  }
  angle += inc;
}  

class Bubble {
  constructor(color) {
    this.x = 100;
    this.y = 100;
    this.color = color;
  }
  
  display()
  {
    fill(this.color);
    ellipse(this.x+sizeX/2, this.y+sizeY/2,r);
  }
  
  move(x,y)
  {
    this.x = x;
    this.y = y;
  }
}