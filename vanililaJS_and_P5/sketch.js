let x = 0;
let xSpeed=1;
let radius = 70;

let fasterButton = document.getElementById("fast")

function setup(){
    let cnv = createCanvas(400,400);
    cnv.parent("canvasContainer");
}

function draw(){
    background(120,40,240);
    circle(x,height/2,20);
    x+=xSpeed;
    if (x>width+radius){
        x=0;
    }
}

function increaseSpeed(){
    xSpeed++;
}

fasterButton.addEventListener("click", increaseSpeed)