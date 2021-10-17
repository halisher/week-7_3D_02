let bracelet;
let spacing = 35;

function preload()  {
bracelet = loadModel('bracelet3d.obj', true);
}

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(102,255,230);
  ortho(-width / 2, width / 2, height/ 2, -height/ 2, 0 , 4000);

  noStroke();


let locX= mouseX - width / 2;
let locY= mouseY - height / 2;

for (x = 0; x <= 600; x += spacing) {
for (y = 0; y <= 600; y += spacing) {

  push();
  normalMaterial()
  translate(-300 + x, -300 + y);
  rotate (45)
  rotateX(frameCount * 0.02 + x);
  rotateY(frameCount * 0.02 + y);
  rotateZ(frameCount * 0.02 + x);
  scale(0.4)
  model(bracelet);
  pop();
}
}
}
