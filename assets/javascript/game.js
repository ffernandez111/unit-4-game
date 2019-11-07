
var targetScore = (Math.floor(Math.random() *100)+19)
var wins = 0;
var losses =0;
var score =0;
var blueBallValue = (Math.floor(Math.random() *10)+3)
var greenBallValue = (Math.floor(Math.random() *10)+4)
var redBallValue = (Math.floor(Math.random() *10)+5) 
var yellowBallValue = (Math.floor(Math.random() *10)+6)



$("#crystal-ball-1").on("click", function(){
    console.log("1")
  score=blueBallValue + score;
  console.log(score)
  $("#score").html("Score:" + score)
  if (score == targetScore){
    //wins++ - This is the same as wins = wins + 1
    wins=wins + 1; 
  }
  else if(score < targetScore){

  }
  else {
      losses=losses +1;
  }
    
});

$("#crystal-ball-2").on("click", function(){
    //code to change score goes here
    console.log("2")
});

$("#crystal-ball-3").on("click", function(){
    //code to change score goes here
    console.log("3")
});

$("#crystal-ball-4").on("click", function(){
    //code to change score goes here
    console.log("4")
});






    