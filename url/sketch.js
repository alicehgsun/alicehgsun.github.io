// Based on: Daniel Shiffman's Particles code & textToPoints instruction

var font;
var vehicles = [];
var bounds;

function preload() {
  font = loadFont('Roboto500.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER);
  var points = font.textToPoints('alicehgsun.com', (windowWidth*0.14), windowHeight/2, windowWidth/10, {
    sampleFactor: 1,
    simplifyThreshold: 0
  });
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    vehicles.push(new Vehicle(pt.x, pt.y));
  }

  bounds = font.textBounds('particles', 50, 180);
}


function draw() {
  background(0);
  if (mouseIsPressed) {
    for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      stroke("#0066ff");
      v.shatter();
      v.show();
    }
  } else {
    for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      stroke(random(60, 200));
      v.update();
      v.show();
      v.behaviors();
    }
  }
}
