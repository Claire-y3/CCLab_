let x1=0;
let bluechannel = 0;
let xPosition =[100,120,50,300]
let yPosition =[130,220,40,300]
let noisePointer=0;


function setup(){
    let cnv = createCanvas(400,400);
    cnv.parent("canvasContainer");
    
    xPosition.push(500);

    xPosition[xPosition.length]=200;
}

function draw(){
    background(255,10);
    //fill(150,50,bluechannel);

    for(let x=0;x<width;x+=10){
        for(let y =0;y<height;y+=10){
            fill(255,10);
            if(mouseX > x && mouseX< x+10 && mouseY > y && mouseY < y+10){
                fill(0,50)
                circle(x,y,10)
            }
            fill(255,10)
            rect(x,y,10,10)
        } 
    }

    fill(0)
    let i = map(random(),0,1,100,300)
    let y = map(noise(noisePointer),0,1,100,300)
    circle(width/2,y,10)

    noisePointer+=0.01;
    x1++;
    bluechannel=frameCount%255;
}