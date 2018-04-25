let skull;
let blue;
let angle;
let sAngle;
let distance;
let change;
function preload(){
  skull = loadModel('Skull.obj', true);
  blue = loadImage('blue.png');
}

function setup() {
  createCanvas(300, 300, WEBGL);
  angle = 0;
  sAngle = 0;
  distance = 0;
  change = 10;
}

function draw() {
  	angle += 0.05;
	sAngle += 0.01;
  	let y = height/2;
  	let x = 1000 * cos(angle);
  	let z = 1000 * sin(angle);
	ambientLight(70, 70, 70);
	pointLight(255, 255, 255, x, y, z);
	rotateZ(sAngle);
	specularMaterial(245);
	model(skull);
}
