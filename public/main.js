$(document).ready(function(){
    // SDK Needs to create video and canvas nodes in the DOM in order to function
    // Here we are adding those nodes a predefined div.
    var divRoot = $("#affdex_elements")[0];
    var width = 640;
    var height = 480;
    var faceMode = affdex.FaceDetectorMode.LARGE_FACES;
    //Construct a CameraDetector and specify the image width / height and face detector mode.
    var detector = new affdex.CameraDetector(divRoot, width, height, faceMode);

    //Enable detection of all Expressions, Emotions and Emojis classifiers.
    detector.detectAllEmotions();
    detector.detectAllExpressions();

    //Add a callback to notify when the detector is initialized and ready for runing.
    detector.addEventListener("onInitializeSuccess", function() {
        //gameStart();
        //Display canvas instead of video feed because we want to draw the feature points on it
        $("#face_video_canvas").css("display", "block");
        $("#face_video").css("display", "none");
    });

    $("#start").click(function() {
        if (detector && !detector.isRunning) {
            detector.start();
        }
    });
    $("#stop").click(function() {
        if (detector && detector.isRunning) {
            detector.removeEventListener();
            detector.stop();
        }
    });    
    $("#reset").click(function() {
        if (detector && detector.isRunning) {
            detector.reset();
            $('#results').html("");
        }
    });

    //Add a callback to notify when camera access is allowed
    // detector.addEventListener("onWebcamConnectSuccess", function() {
    // });

      //Add a callback to notify when camera access is denied
    detector.addEventListener("onWebcamConnectFailure", camFail);

      //Add a callback to notify when detector is stopped
    detector.addEventListener("onStopSuccess", function() {
        $("#results").html("");
    });

      //Add a callback to receive the results from processing an image.
      //The faces object contains the list of the faces detected in an image.
      //Faces object contains probabilities for all the different expressions, emotions and appearance metrics
    detector.addEventListener("onImageResultsSuccess", parseFrame);

});
