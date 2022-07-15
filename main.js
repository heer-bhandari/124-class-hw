
noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristY = 0;
difference = 0;

function setup () {
video = createCapture(VIDEO);
video.size(560 , 150);

canvas = createCanvas(550 , 550);
canvas.position(560 , 150);

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initalized !');
}

function gotPoses (results){
  
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX + "noseY = " + noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
  
}

function draw(){
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference + "px";
    fill('#F90093');
    stroke('#90093');
    textSize(difference);
    text('heer',50,200);
  

}
