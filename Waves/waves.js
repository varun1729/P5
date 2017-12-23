const sizeX = 400;
const sizeY = 300;
const splits = 40;
const numOfWaves = 2;
const heightTolerance = 1/3*sizeY;
const startY = sizeY/2;
const incX = sizeX/splits;
const waveColor = '#36f4ff';
const backgroundColor = '#ff4136';

function setup() { 
  createCanvas(sizeX, sizeY);
  startX = 0;
  angle = 0;
  h = heightTolerance;
  flip = false;
  stroke(waveColor);
  strokeWeight(7);
  incAngle = TWO_PI/splits*numOfWaves;

} 

function draw() {
  background(backgroundColor);
  for (var i = 0; i <= splits*numOfWaves; i++)
  {
    endY = startY - h*sin(angle);
    line(startX,startY,startX,endY);
    angle += incAngle;
    startX += incX;
  }
  startX = 0;
  angle = 0;
  
  if (flip === false){
    h--;
    if (h === -heightTolerance) {
      flip = true;
    }
  }
    
  else {
    h++;
    if (h === heightTolerance) {
      flip = false;
    }
  }  
}
