let emojiStory=[];
let boom = [];
let numBoom = 50;

let dataObject;

function setup(){
    let cnv = createCanvas(windowWidth*0.9,300);
    cnv.parent("canvasContainer");
    dataObject = new DataObject(width/2);
}

function draw(){
    background(255);
    
    dataObject.display();
    dataObject.scrollUp();
    dataObject.scrollDown();

    drawSlider();
    drawOldStory();

    //boom effect
    if (keyIsDown(ENTER)){
        for(let i = 0;i<numBoom;i++){
            boom.push(new Boom(width/2,height/2+70));
        }
        dataObject.addSentence();
    }
    for (let i = 0; i < boom.length; i++) {
        boom[i].update();
        boom[i].display();
    }
    while(boom.length>300){
        boom.splice(0,1);
    }
}

function drawSlider(){
    //arrows
    strokeWeight(2);
    stroke(255);
    line(width-30,19,width-40,26);
    line(width-30,19,width-20,26);
    line(width-30,13,width-40,20);
    line(width-30,13,width-20,20);

    line(width-30,height-19,width-40,height-26);
    line(width-30,height-19,width-20,height-26);
    line(width-30,height-13,width-40,height-20);
    line(width-30,height-13,width-20,height-20);
}

// function mouseDragged(){
//     posY=mouseY;
// }

function drawOldStory(){
    fill(0);
    textSize(40);
    textFont("Cursive");

    textAlign(CENTER);
    text("📝:  ________________",width/2,height-10);
}

class Boom {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, 5);
    
    this.size = random(10,30);
    this.transp = 250;
  }
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    this.ySpeed *= 1.02;
    this.xSpeed *= 1.07;
    
    this.transp -=2;
  }
  display() {
    push();
    translate(this.x, this.y);
    textSize(this.size);
    text("⭐️",0,0);

    pop();
  }
}

class DataObject{
    constructor(x){
        this.x=x;
        this.sentences=[];
        this.lineHeight=15;
        this.y=height-this.sentences.length*this.lineHeight;
    }
    display(){
        push();
        translate(this.x,this.y);
        fill(0);
        textSize(30);
        textFont("Cursive");
    
        textAlign(RIGHT);
        text("Once upon a time ✍️——",0,-130);
        textAlign(CENTER);
        text("💤💤💤",0,-90);
        text("🌤️👀👧🏻💬",0,-50);

        for(let i = 0;i<this.sentences.length;i++){
            textAlign(CENTER);
            fill(0);
            textSize(35);
            text(this.sentences[i],0,i*this.lineHeight);
            // console.log(this.sentences[i],this.sentences.length,this.y);
        }
        pop();
    }
    addSentence(s){
        // console.log("I received ", s);
        this.sentences.push(s);
        this.y=height-this.sentences.length*this.lineHeight;
    }
    scrollUp(){
        strokeWeight(25);
        strokeCap(ROUND);
    
        if(mouseX>=width-50 && mouseX<=width && mouseY<=30 && mouseY>=0 && this.y<height-10){
            stroke(150);
            this.y++;
        }else{
            stroke(220);
        }
        line(width-40,20,width-20,20);
    }
    scrollDown(){
        strokeWeight(25);
        strokeCap(ROUND);
        if (mouseX>=width-50 && mouseX<=width && mouseY>=height-30 && mouseY<=width && this.y>height-this.sentences.length*this.lineHeight){
            stroke(150);
            this.y--;
        }else{
            stroke(220);
        }
        line(width-40,height-20,width-20,height-20);
        console.log("this.y is: ",this.y);
    }
}