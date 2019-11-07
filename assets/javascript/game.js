var targetScore = (Math.floor(Math.random() *100)+19)
var wins = 0;
var losses =0;
var score =0;
var blueBallValue = (Math.floor(Math.random() *10)+3)
var greenBallValue = (Math.floor(Math.random() *10)+4)
var redBallValue = (Math.floor(Math.random() *10)+5) 
var yellowBallValue = (Math.floor(Math.random() *10)+6)



("#crystal-ball-1").on("click", function(){
  if (score == targetScore  ){
    //wins++ - This is the same as wins = wins + 1
    wins=wins + 1;
  }  
});

("#crystal-ball-2").on("click", function(){
    //code to change score goes here
});

("#crystal-ball-3").on("click", function(){
    //code to change score goes here
});

("#crystal-ball-4").on("click", function(){
    //code to change score goes here
});






    