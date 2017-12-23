const sizeX = 1600;
const sizeY = 1600;
const fracColor = "#01FF70";
const backgroundColor = "rgb(9, 31, 61)";
const factor = 2/3;
const angle = Math.PI*2*5.5/6;
const min = 10;
const length = 500;


function setup() {
    createCanvas(sizeX, sizeY);
    //slider = createSlider(0,2*3.14159265,3.14159265/4,0.01);

}

function draw() {
	//angle = slider.value();
    background(backgroundColor);
    stroke(fracColor);
    translate(sizeX/2,sizeY);
    branch(length);
    noLoop();
}

function branch(length) 
{
	line (0,0,0,-length);
	translate(0,-length);
	if (length > min)
	{
		push();
		rotate (angle);
		branch(length*factor);
		pop();
		
		push();
		rotate(-angle);
		branch(length*factor);
		pop();

	}


}