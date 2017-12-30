const radiusDecrement = 3;
const sizeX =  document.documentElement.clientWidth;
const sizeY =  document.documentElement.clientHeight;
const backgroundColor = "#fff0ed";

const fr = 60;
const initialDiameter = sizeX / 4;
let innerCircleDiameter = 0;

let arr = []
let circlePatterns = []

let song0;
let song1;
let song2;
let song3;
let song4;
let song5;
let song6;
let song7;
let song8;
let song9;
let song10;
let song11;
let song12;
let song13;
let song14;
let song15;
let song16;
let song17;
let song18;
let song19;
let song20;
let song21;
let song22;
let song23;
let song24;
let song25;

function preload() {
    song0 = loadSound("sounds/bubbles.mp3");
    song1 = loadSound("sounds/clay.mp3");
    song2 = loadSound("sounds/confetti.mp3");
    song3 = loadSound("sounds/corona.mp3");
    song4 = loadSound("sounds/dotted-spiral.mp3");
    song5 = loadSound("sounds/flash-1.mp3");
    song6 = loadSound("sounds/flash-2.mp3");
    song7 = loadSound("sounds/flash-3.mp3");
    song8 = loadSound("sounds/glimmer.mp3");
    song9 = loadSound("sounds/moon.mp3");
    song10 = loadSound("sounds/pinwheel.mp3");
    song11 = loadSound("sounds/piston-1.mp3");
    song12 = loadSound("sounds/piston-2.mp3");
    song13 = loadSound("sounds/piston-3.mp3");
    song14 = loadSound("sounds/prism-1.mp3");
    song15 = loadSound("sounds/prism-2.mp3");
    song16 = loadSound("sounds/prism-3.mp3");
    song17 = loadSound("sounds/splits.mp3");
    song18 = loadSound("sounds/squiggle.mp3");
    song19 = loadSound("sounds/strike.mp3");
    song20 = loadSound("sounds/suspension.mp3");
    song21 = loadSound("sounds/timer.mp3");
    song22 = loadSound("sounds/ufo.mp3");
    song23 = loadSound("sounds/veil.mp3");
    song24 = loadSound("sounds/wipe.mp3");
    song25 = loadSound("sounds/zig-zag.mp3");

    circlePatterns = [
        ["#6534ff", song0],
        ["#5e0231", song1],
        ["#e6af4b", song2],
        ["#e05038", song3],
        ["#334431", song4],
        ["#300032", song5],
        ["#16174f", song6],
        ["#97743a", song7],
        ["#cdd422", song8],
        ["#3fb0ac", song9],
        ["#e62739", song10],
        ["#118C4E", song11],
        ["#B71427", song12],
        ["#FF9009", song13],
        ["#b56969", song14],
        ["#33691E", song15],
        ["#ccff00", song16],
        ["#0000ff", song17],
        ["#431c5d", song18],
        ["#FFE658", song19],
        ["#005A31", song20],
        ["#4A96AD", song21],
        ["#173e43", song22],
        ["#DE1B1B", song23],
        ["#D9853B", song24],
        ["#1A237E", song25],
    ];
}

function setup() {
    createCanvas(sizeX, sizeY);
    frameRate(fr)
    noStroke();
}

function draw() {
    background(backgroundColor);
    while ((arr[0] != undefined) && (arr[0][4] >= initialDiameter)) {
        arr.shift();
    }
    for (let i = arr.length - 1; i >= 0; i--) {

        fill(arr[i][0]);
        ellipse(arr[i][1], arr[i][2], arr[i][3]);
        arr[i][4] += radiusDecrement;
        fill(backgroundColor);
        ellipse(arr[i][1], arr[i][2], arr[i][4]);

    }
}

function keyPressed() {
	if (keyCode <= 90 && keyCode >= 65)
	{
	    // let temp = [circlePatterns[keyCode - 65][0], random(sizeX-initialDiameter)+initialDiameter/2, random(sizeY-initialDiameter)+initialDiameter/, initialDiameter];
        let temp = [circlePatterns[keyCode - 65][0], random(sizeX), random(sizeY), initialDiameter,innerCircleDiameter];
	    arr.push(temp);
	    circlePatterns[keyCode - 65][1].play();
	}
}