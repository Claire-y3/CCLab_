let gradient;
let horses = [];

function preload(){
    gradient=loadImage("assets/gradient-bkg.png");

    for(let i=0;i<9;i++){
        let filename= ""assets/muybridge_"+i+".jpg""
        console.log(filename);
        horses.push(loadImage(filename));
    }
}

function setup(){
    let cnv = createCanvas(400,400);
    cnv.parent("canvasContainer");

}

function draw(){
    background(120,20,40,)

    // let imageWidth = horse[0].width;
    // let imageHeight = horses[0].height;
    // let newWidth = imageHeigh *0.5;
    // let newHeight = imageHeigh *0.5;
    // image(horse[0],0,0)

    push();
    scale(0.5);
    
    image(horses[round(b)],0,0);

    pop();

    b+=0.1
    if (b>8){
        b=0
    }

}