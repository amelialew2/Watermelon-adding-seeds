var showSeed;
var mouseLocationX;
var mouseLocationY; 
var locationArrayX;
var locationArrayYY;
function setup() {
  showSeed=false;
  createCanvas(700, 400);
  locationArrayX = [];
  locationArrayY = [];
}

function draw() {
  background(193, 228, 245);
  fill(42, 196, 8);
  stroke(42, 196, 8);
  ellipse(350, 400, 450, 500);
  fill(252, 45, 45);
  ellipse(350, 400, 400, 450);
  if (showSeed==true) {
    fill(0,0,0);
    stroke(0,0,0); 
    for (var i = 0; i<locationArrayX.length; i++) {
      ellipse(locationArrayX[i], locationArrayY[i], 50, 20);
    }
  }
}

function mousePressed() {
  showSeed=true;
  mouseLocationX=mouseX;
  mouseLocationY=mouseY;
  locationArrayX.push(mouseX);
  locationArrayY.push(mouseY);
}