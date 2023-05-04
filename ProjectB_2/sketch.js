let emojiStory=[];

function setup(){
    let cnv = createCanvas(600,300);
    cnv.parent("canvasContainer");
    background(255);
}

function draw(){
    // story.update();
    // story.display();

    fill(0);
    textSize(20);
    noStroke();
    textAlign(CENTER);
    text("Once upon a time ✍️——",130,40);

    text("👨‍🍳🍳🍔🌭🍟🍕",width/2,height/2-30);
    text("! 😱💦🤧",width/2,height/2+20);
    text("____________",width/2,height/2+70);


    fill(150);
    textAlign(RIGHT);
    text("still working on this part...",width,height-20);
}


class story{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    update(){

    }
    display(){

    }
}