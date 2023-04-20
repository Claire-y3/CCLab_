let angle1 = 0;
let angle2 = 90;
let angle3 = 180;
let d = 80;
let pre_d;
let x, y;
let speedX, speedY;

function setup() {
  createCanvas(540, 540);
  background(250);

  x = d / 2;
  y = d / 2;

  pre_d = 0.25;

  speedX = random(-5, 5);
  speedY = random(-5, 5);
}

function draw() {
  noStroke();
  random(255);

  //Adjust the position based on speedX and speedY
  x = x + speedX;
  y = y + speedY;

  d = d - pre_d;

  let angleInRadians1 = radians(angle1);
  let angleInRadians2 = radians(angle2);
  let angleInRadians3 = radians(angle3);
  let sinValue1 = sin(angleInRadians1);
  let sinValue2 = sin(angleInRadians2);
  let sinValue3 = sin(angleInRadians3);
  let cosValue1 = cos(angleInRadians1);
  let cosValue2 = cos(angleInRadians2);
  let cosValue3 = cos(angleInRadians3);

  if (speedX < 20 || speedY < 20) {
    if (x > width - d / 2 || x < 0 + d / 2) {
      speedX = speedX * -1.1;
      speedY = speedY * 1.05;
    }

    if (y > height - d / 2 || y < d / 2) {
      speedY = speedY * -1.1;
      speedX = speedX * 1.05;
    }
  } else {
    speedX = speedX * 0.9;
    speedY = speedY * 0.9;
  }

  if (d < 0 || d > 80) {
    pre_d = -pre_d;
  }

  let blueChannel = map(sinValue1, -1, 1, 0, 255);
  let greenChannel = map(sinValue2, -1, 1, 0, 255);
  let redChannel = map(sinValue3, -1, 1, 0, 255);
  fill(redChannel, greenChannel, blueChannel, 20);

  ellipse(x, y, d, d);

  let patternSize1 = map(cosValue1, -1, 1, 0, 100);
  let patternSize2 = map(cosValue2, -1, 1, 0, 100);
  let patternColor = map(cosValue3, -1, 1, 250, 0);
  fill(patternColor, 20);
  ellipse(width - x, width - y, 100 - d, 100 - d);

  for (let i = 10; i <= 100; i = i + 5) {
    fill(patternColor, 50);
    stroke(patternColor);
    rect(width / 2, height / 2, patternSize1 - i, patternSize2 - i);
    noStroke();
  }

  for (let j = 0; j < 4; j++) {
    let xPos = map(sinValue1,-1,1,width / 2 - 120 + 30 * j,width / 2 + 110 - 30 * j);
    let yPos = map(cosValue1,-1,1,height / 2 - 120 + 30 * j,height / 2 + 110 - 30 * j);
    if (xPos + yPos < height) {
      fill(redChannel, greenChannel, blueChannel);
    } else {
      fill(patternColor);
    }
    ellipse(xPos, yPos, d / 5, d / 5);
  }
  angle1 = angle1 + 1;
  angle2 = angle2 + 1;
  angle3 = angle3 + 1;
}
