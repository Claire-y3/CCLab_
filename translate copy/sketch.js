let squareSize=0.1;
let a=20
let a2=40
let bigRadius=140;
let gradient;

function preload(){
    gradient=loadImage("assets/gradient-bkg.png")
}

function setup(){
    background(120,40,240);
    let cnv = createCanvas(400,400);
    cnv.parent("canvasContainer");
}

function draw(){

    push();
    translate(width/2,height/2)
    rotate(radians(a))
    // rect(-squareSize/2+140,-squareSize/2,squareSize,squareSize);
    push();
        translate(bigRadius,0);
        rotate(radians(a2))
        //rect(-squareSize/2,-squareSize/2,squareSize,squareSize);
        stroke(0)
        circle(-squareSize/2,-squareSize/2,3);
        circle(-squareSize/2,squareSize/2,3);
        stroke(255)
        circle(squareSize/2,-squareSize/2,3);
        circle(squareSize/2,squareSize/2,3);
        
        //fill(0,255,0);
        //circle(0,0,5)
    pop()

    // fill(255,0,0);
    // circle(0,0,5)
    
    pop();
    a++
    a2-=4
    bigRadius-=0.1
    squareSize*=1.003
}