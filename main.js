noseX = 0;
noseY = 0;
function preload(){
    clownnose = loadImage('https://i.postimg.cc/prF5hnFz/clownnose.png')
}
function setup(){
    canvas = createCanvas(400,400)
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,400,400)
    image(clownnose,noseX,noseY,40,40)
}
function take_snapshot(){
    save('filter')
}
function modelLoaded(){
    console.log('modelLoaded')
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x - 133;
        noseY = results[0].pose.nose.y - 70;
        console.log('noseX: ' + results[0].pose.nose.x)
        console.log('noseY: ' + results[0].pose.nose.y)
    }
}