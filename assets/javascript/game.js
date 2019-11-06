("#crystal-ball-1").on("click", function(){
    //code to change score goes here
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


var listOfNums = ["one","two","three"]
var computerGuess = listOfNums[Math.floor(Math.random() * listOfNums.length)];
var numOfGuesses = computerGuess.length + 8;
var results = [];
var blankWord = []; 
console.log (computerGuess);
for (var i = 0; i < computerGuess.length; i++) {
    results[i] = " _ ";
    
}
    
    document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    
    for (var j = 0; j < computerGuess.length; j++) {
        // Hit
        if (userGuess === computerGuess.charAt(j)) {
            results[j] = userGuess;
            console.log (results);
            $("#blankWord").text(results);
        } else {
            // Miss
            console.log('Wrong letter:', userGuess);
        }
    }
