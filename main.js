//https://teachablemachine.withgoogle.com/models/kFuwlkjKv/

Webcam.set({
    width: 300,height: 300,image_format:"png",png_quality: 90
})

camera= document.getElementById("camera")
Webcam.attach("#camera")
 function takeImage(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML= "<img id='img1' src="+data_uri+">"
     })
 }

 console.log('ml5 version',ml5.version)
  classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kFuwlkjKv/model.json",modelLoaded)
  function modelLoaded(){
      console.log('modelLoaded')
  }

  prediction1=""
  prediction2=""

  function speak(){
      var synth=window.speechSynthesis
      speak_data1="The first prediction is "+prediction1+"and the second prediction is "+prediction2+"."
      var utterThis=new SpeechSynthesisUtterance(speak_data1)
      synth.speak(utterThis)
  }

  function checkImage(){
    img=document.getElementById('img1')
    classifier.classify(img, gotResult)
  }

  function gotResult(error, results){
    if (error) {
      console.error(error)  
    } else {
      console.log(results)
      document.getElementById('emotion1').innerHTML=results[0].label
      document.getElementById('emotion2').innerHTML=results[1].label
      prediction1=results[0].label
      prediction2=results[1].label
      speak()

      if (prediction1=="Happy") {
          document.getElementById('emoji1').innerHTML="&#128512;"
      }     
      if (prediction1=="Sad") {
        document.getElementById('emoji1').innerHTML="&#128532;"
    }  
    if (prediction1=="Angry") {
        document.getElementById('emoji1').innerHTML="&#128545;"
    }   
    if (prediction1=="Crying") {
        document.getElementById('emoji1').innerHTML="&#128546;"
    }  
    
    if (prediction2=="Happy") {
        document.getElementById('emoji2').innerHTML="&#128512;"
    }     
    if (prediction2=="Sad") {
      document.getElementById('emoji2').innerHTML="&#128532;"
  }  
  if (prediction2=="Angry") {
      document.getElementById('emoji2').innerHTML="&#128545;"
  }   
  if (prediction2=="Crying") {
      document.getElementById('emoji2').innerHTML="&#128546;"
  }   
               
      
    }
  }

  