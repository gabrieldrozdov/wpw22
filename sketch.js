// Based on p5.js Follow 3 example
// https://p5js.org/examples/interaction-follow-3.html
var x = [],
	y = [],
	segNum = 20,
	segLength = 15,
	rot = 0,
	rotDir = 0.07;

for (var i = 0; i < segNum; i++) {
	x[i] = 0;
	y[i] = 0;
}

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent("trail");
	strokeWeight(2);
	stroke(0);
}

function draw() {
	clear();
	dragSegment(0, mouseX, mouseY);
	for (var i = 0; i < x.length - 1; i++) {
		dragSegment(i + 1, x[i], y[i]);
	}
	fill("#ffb400");
	translate(mouseX, mouseY);
	rotate(rot);
	translate(-mouseX, -mouseY);
	beginShape();
		vertex(mouseX-20, mouseY-5);
		vertex(mouseX-20, mouseY+5);
		vertex(mouseX-5, mouseY+5);
		vertex(mouseX-5, mouseY+20);
		vertex(mouseX+5, mouseY+20);
		vertex(mouseX+5, mouseY+5);
		vertex(mouseX+20, mouseY+5);
		vertex(mouseX+20, mouseY-5);
		vertex(mouseX+5, mouseY-5);
		vertex(mouseX+5, mouseY-20);
		vertex(mouseX-5, mouseY-20);
		vertex(mouseX-5, mouseY-5);
	endShape(CLOSE);
	rot += rotDir;
}

function dragSegment(i, xin, yin) {
	const dx = xin - x[i];
	const dy = yin - y[i];
	const angle = atan2(dy, dx);
	x[i] = xin - cos(angle) * segLength;
	y[i] = yin - sin(angle) * segLength;
	segment(x[i], y[i], angle);
}

function segment(x, y, a) {
	push();
	translate(x, y);
	rotate(a);
	line(0, 0, segLength, 0);
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
	rotDir *= -1;
}
