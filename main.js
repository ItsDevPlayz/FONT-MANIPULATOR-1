function setup(){
    video=createCapture(VIDEO);
video.size(550,510);

    canvas=createCanvas(600,600);
    canvas.position(600,250);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}

function draw(){
background('lightsteelblue');
}
function modelLoaded() {
    console.log('poseNet has been loaded');
}

function gotposes(results){
    if(results.length>0){
console.log(results);
    }
}