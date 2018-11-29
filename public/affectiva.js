//Draw the detected facial feature points on the image
function drawFeaturePoints(img, featurePoints) {
    var contxt = $('#face_video_canvas')[0].getContext('2d');
    var hRatio = contxt.canvas.width / img.width;
    var vRatio = contxt.canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    contxt.strokeStyle = "#FFFFFF";
    for (var id in featurePoints) {
        contxt.beginPath();
        contxt.arc(featurePoints[id].x,
        featurePoints[id].y, 2, 0, 2 * Math.PI);
        contxt.stroke();
    }
}
function parseFrame(faces, image, timestamp) {
    var emotions;
    var expressions;
    if (faces.length > 0) {
        JSON.stringify(faces[0].emotions, function(key, val) {
            emotions = val.toFixed ? Number(val.toFixed(0)) : val;
        });
        JSON.stringify(faces[0].expressions, function(key, val) {
            expressions = val.toFixed ? Number(val.toFixed(0)) : val;
        });
        if ($('#face_video_canvas')[0] != null)
            drawFeaturePoints(image, faces[0].featurePoints);
    }
    var guess = guessEmotion(emotions, expressions);
    writeGuess(guess);
}
function writeGuess(guess){
    //$("#info").html("<strong>" + guess + "</strong>");
}
function camSearching(){
    $("#info").html("<strong>Searching For Your Face...</strong>");    
}
function camFail(){
    $("#info").html("<strong>Please Enable Your Webcam to Play!</strong>");
}
function log(node_name, msg) {
    $(node_name).append("<span>" + msg + "</span><br />")
}