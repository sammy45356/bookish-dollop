prediction_1 = "" 
prediction_2 = "" 
Webcam.set({ width:450, height:500, image_format : 'jpeg', jpeg_quality:90 });
camera = document.getElementById("camera");
Webcam.attach('#camera');
 function take_snapshot() { 
    Webcam.snap(function(data_uri) { 
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
        console.log(data_uri) }); 
    }

    console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mlb7R2if0/model.json',modelLoaded);

    function modelLoaded() {
        console.log('Model Loaded!');
    }

    function check()
    {
        img = document.getElementById('captured_image');
        classifier.classify(img, gotResult);
    }

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

  function gotResult(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "left")
        {
            document.getElementById("update_gesture").innerHTML = "&#128072;";
        }
        if(results[0].label == "thumbs up")
        {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if(results[0].label == "full palm")
        {
            document.getElementById("update_gesture").innerHTML = "&#9995;";
        }
        if(results[1].label == "left")
        {
            document.getElementById("update_gesture").innerHTML = "&#128072;";
        }
        if(results[1].label == "thumbs up")
        {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if(results[1].label == "full palm")
        {
            document.getElementById("update_gesture").innerHTML = "&#9995;";
        }

    }
}
  
  



