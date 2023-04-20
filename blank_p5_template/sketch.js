let x = 0;
let radius = 70;

function setup(){
    let cnv = createCanvas(400,400);
    cnv.parent("canvasContainer");
}

function draw(){
    background(120,40,240);
    circle(x,height/2,20);
    x+=3;
    if (x>width+radius){
        x=-radius;
    }
}