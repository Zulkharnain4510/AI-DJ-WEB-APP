song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX= 0;
leftWristY= 0;

function preload()
{
    song = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}
function gotposes(result)
{
    if(result.length > 0)
    {
        console.log(result);
        scoreLeftWrist =  result[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY= "+ leftWristY);

        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY= "+ leftWristY);

    }
}
function draw() {
    Image(video, 0, 0, 600, 500);

    FileList("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, LeftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(inNumberleftWristY);
    leftWristY_divide_1000 *2 ;
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}