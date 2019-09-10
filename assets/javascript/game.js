
   

    // Array that list out all options.
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j",
   "k","l","m","n","o","p","q","r",
   "s","t","u","v","w","x","y","z"
   ];
   // console.log("computerchoices");
   // Variables to hold the number of wins, losses, guesslist, userchoice.
   var wins = 0;
   var losses = 0;
   var guessesLeft = 9;
   var userGuess = [];  
   // console.log(userGuess);
   
   //Variables that hold references to the place in the HTML where we want to display things.
   var directionsText = document.getElementById("directions-text");
   var computerChoicesText = document.getElementById("computerchoices-text");
   var winsText = document.getElementById("wins-text");
   var lossesText = document.getElementById("losses-text");
   var guessesLeftText = document.getElementById("guessesleft-text");
   var userGuessText = document.getElementById("userguess-text");
  
   //Randomly choose a choice from the options array. This is the computer's guess.
   var computerChose = computerChoices[Math.floor(Math.random() * computerChoices.length)];
   console.log(computerChose);
   
   //Function is executed when any key is pressed.
   document.onkeypress = function(event) {
   
   //    Add most recent key as last element of userGuess array.
   userGuess.push(event.key);

   //This logic determines the outcome of the game (wins/losses/guesses/guessesleft), increasing and reducing sores appropriately. 
   if (userGuess[userGuess.length - 1] === computerChose){
          guessesLeft = 9;
          userGuess = [];
          wins++;
        //   alert ("Way To Go WINNER ;)")
          computerChose = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        //   console.log(computerChose);
       }
       else {
           guessesLeft--;   
       }
      
       if (guessesLeft === 0){
         guessesLeft = 9;
         losses++;
         userGuess = [];
        //  alert ("You Just Lost")
        
       }
   //Hide the directions
     directionsText.innerHTML = "" ;

   //Display the user guesses, wins/losses/guesses left, 
      userGuessText.innerHTML = "Your Guesses so far: " + userGuess;
      winsText.innerHTML = "Wins: " + wins;
      lossesText.innerHTML = "Losses: " + losses;
      guessesLeftText.innerHTML = "Guesses Left: " + guessesLeft;
}
    



