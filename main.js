noseX = "";
noseY = "";


function preload(){
    mouseaches = loadImage("https://i.postimg.cc/hGMW0S03/m.png")
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mouseaches, noseX-35, noseY, 70, 50);
}

function take_snapshot(){
    save("FilterPicture.png");
}

function modelLoaded(){
    console.log("model is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}