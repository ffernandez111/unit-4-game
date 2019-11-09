

// Generates random number to guess
    var targetScore = (Math.floor(Math.random() *102)+19)

// Displays random number
    $('#randomNumber').text(Random); 

// Variables to keep track of wins, losses and total
var wins = 0;
var losses =0;
var score =0;

//Generate random number for each crystal
var blueBallValue = (Math.floor(Math.random() *12)+3)
var greenBallValue = (Math.floor(Math.random() *12)+6)
var redBallValue = (Math.floor(Math.random() *12)+9) 
var yellowBallValue = (Math.floor(Math.random() *12)+1)


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
    console.log("2")
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

$("#crystal-ball-3").on("click", function(){
    console.log("3")
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

$("#crystal-ball-4").on("click", function(){
    console.log("4")
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





    