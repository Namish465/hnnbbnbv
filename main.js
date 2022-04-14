
function setup()
{
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video , modelLoaded );

poseNet.on('pose' , gotPoses)
}

function modelLoaded()
{

    console.log('poseNet is Initialized');
}

function draw()
{
image(video,0,0,600,500);
}

function preload()
{
song = loadSound("music2.mp3");
}


