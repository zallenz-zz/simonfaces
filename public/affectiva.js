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
    $('#results').html("");
    log('#results', "Timestamp: " + timestamp.toFixed(2));
    log('#results', "Number of faces found: " + faces.length);
    if (faces.length > 0) {
        log('#results', "Appearance: " + JSON.stringify(faces[0].appearance));
        console.log("HERE:" + faces[0].emotions);
        log('#results', "Emotions: " + JSON.stringify(faces[0].emotions, function(key, val) {
            return val.toFixed ? Number(val.toFixed(0)) : val;
        }));
        log('#results', "Expressions: " + JSON.stringify(faces[0].expressions, function(key, val) {
            return val.toFixed ? Number(val.toFixed(0)) : val;
        }));
        log('#results', "Emoji: " + faces[0].emojis.dominantEmoji);
        if ($('#face_video_canvas')[0] != null)
            drawFeaturePoints(image, faces[0].featurePoints);
    }
}
function camFail(){
    console.log("web cam not enabled");
}
function log(node_name, msg) {
    $(node_name).append("<span>" + msg + "</span><br />")
}