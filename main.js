function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NvJnv4Nca/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
  if(error){
      console.error(error);
  }
  else{
      console.log(results);
      randomnumber_r=Math.floor(Math.random()*255)+1;
      randomnumber_g=Math.floor(Math.random()*255)+1;
      randomnumber_b=Math.floor(Math.random()*255)+1;
      document.getElementById("result_label").innerHTML='I can Hear -'+results[0].label;
      document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
      document.getElementById("result_label").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
      document.getElementById("result_confidence").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
      img=document.getElementById('alien1');
      if(results[0].label=="Background Sound"){
          img.src='https://www.pinclipart.com/picdir/middle/522-5226166_library-of-ear-clipart-library-library-png-png.png';
      }
      else if(results[0].label=="Beaver"){
        img.src='https://t3.ftcdn.net/jpg/02/66/98/02/360_F_266980245_d5cOuH6LD05xjwVLKxR4DU96sua76eka.jpg';
    } 
    else if(results[0].label=="Lion"){
        img.src='https://media.istockphoto.com/vectors/vector-illustration-of-lion-isolated-on-white-background-vector-id1198529588?k=20&m=1198529588&s=612x612&w=0&h=RHoPSVdkRMemw5flvvgCchS0NJPm8WnjDxH0HkaJuco=';
    } 
    else if(results[0].label=="Tiger"){
        img.src='https://clipart.world/wp-content/uploads/2020/06/realistic-tiger-walking.jpg';
    }
    else{
        img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtInbjOTFt2wD581Qy99vGv_LoyOIgU9wkMg&usqp=CAU';

    }
      
  }
}