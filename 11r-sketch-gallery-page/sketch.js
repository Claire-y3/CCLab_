let dancer;

function setup(){
    let cnv = createCanvas(400,400);
    cnv.parent("canvasContainer");
    dancer = new ClaireDancer(width/2,height/2);
}

function draw() {
  background(250,20);
  // if(mouseIsPressed){
    dancer.update();
    dancer.display();
  // }
}

class ClaireDancer{
  constructor(startX, startY, c) {
    this.x = startX;
    this.y = startY;
    this.color = c;
    this.angle = 30;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  update(){
    this.angle += 5;
    this.r2 = cos(radians(this.angle));
    this.v2 = map(this.r2, -1, 1, -PI / 12, PI / 12);
    this.mouse = map(mouseY,0,height,-5,5);
    this.move = map(this.r2+this.mouse, -1, 1, -4, 4);
  }
  display() {
    push();
    translate(this.x, this.y);

    this.drawArms();
    this.drawLegs();
    this.drawBody();
    this.drawCeiling();
    this.drawHead();

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
    stroke(200);
    strokeWeight(5);
    arc(0, -80, 180, 50, PI / 8, (PI / 8) * 7);
    strokeWeight(0.5);
    line(-40, -55, -50, 10);
    line(40, -55, 50, 10);
    line(-20, -53, -10+this.move*0.3, 70+this.move);
    line(20, -53, 10-this.move*0.3, 70+this.move);
  }
}