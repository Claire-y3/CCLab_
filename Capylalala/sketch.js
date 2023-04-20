let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new ClaireDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only
  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class ClaireDancer {
  constructor(startX, startY, c) {
    this.x = startX;
    this.y = startY;
    this.color = c;
    this.angle = 30;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    // add properties for your dancer here:
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.angle += 5;
    this.r2 = cos(radians(this.angle));
    this.v2 = map(this.r2, -1, 1, -PI / 12, PI / 12);
    this.mouse = map(mouseY,0,height,-5,5);
    this.move = map(this.r2+this.mouse, -1, 1, -4, 4);
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ⬇️ draw your dancer here ⬇️
    this.drawArms();
    this.drawLegs();
    this.drawBody();
    this.drawCeiling();
    this.drawHead();
    // ⬆️ draw your dancer here ⬆️

    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(1);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
  drawArms() {
    noStroke();
    //right arm
    push();
    fill(this.r, this.g, this.b);
    ellipse(50, 10, 15, 15);
    translate(50, 10);
    rotate(-this.move * 0.02);
    fill(this.r, this.g, this.b, 150);
    arc(-30, 0, 70, 10, 3 * HALF_PI, HALF_PI);
    arc(-30, 0, 20, 10, HALF_PI, 3 * HALF_PI);
    rotate(-this.v2);
    arc(0, 0, 10, 80, 0, PI);
    pop();

    //left arm
    push();
    fill(this.r, this.g, this.b);
    ellipse(-50, 10, 15, 15);
    translate(-50, 10);
    rotate(this.move * 0.02);
    fill(this.r, this.g, this.b, 150);
    arc(30, 0, 70, 10, HALF_PI, 3 * HALF_PI);
    arc(30, 0, 20, 10, 3 * HALF_PI, HALF_PI);
    rotate(this.v2);
    arc(0, 0, 10, 80, 0, PI);
    pop();
  }
  drawBody() {
    stroke(255,100);
    strokeWeight(5);
    fill(this.r, this.g, this.b, 150);
    rect(-13, this.move, 26, 50);
  }
  drawLegs() {
    //left leg
    push();
    fill(this.r, this.g, this.b);
    noStroke();
    ellipse(-8+this.move*0.1, 70+this.move, 10, 10);
    translate(-8, 50);
    rotate(this.move * -0.01);
    fill(this.r, this.g, this.b, 150);
    arc(0, this.move, 10, 100, 0, PI);
    pop();
    
    //right leg
    push();
    fill(this.r, this.g, this.b);
    noStroke();
    ellipse(8-this.move*0.1, 70+this.move, 10, 10);
    translate(8, 50);
    rotate(-this.move * -0.01);
    fill(this.r, this.g, this.b, 150);
    arc(0, this.move, 10, 100, 0, PI);
    pop();
  }
  drawHead(){
    stroke(255,100);
    strokeWeight(5);
    fill(this.r, this.g, this.b);
    ellipse(0, this.move, 50, 50);
  }
  drawCeiling(){
    noFill();
    stroke(255);
    strokeWeight(5);
    arc(0, -80, 180, 50, PI / 8, (PI / 8) * 7);
    strokeWeight(0.5);
    line(-40, -55, -50, 10);
    line(40, -55, 50, 10);
    line(-20, -53, -10+this.move*0.3, 70+this.move);
    line(20, -53, 10-this.move*0.3, 70+this.move);
  }
}
