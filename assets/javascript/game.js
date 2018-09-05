// Word base for user to guess 
var word = [
    "rottweiler",
    "mastiff",
    "poodle",
    "collie"
   ];  
  
  // Computer selects a random word from the word base and substitue blanks 
  var word = word[Math.floor(Math.random()*word.length)];
  var answerWord = [];
  for (var i = 0; i < word.length; i++){
      answerWord[i] = "_";
  }
  console.log(answerWord);

  // Checks length of the word and stores it in a variable to see if length is less than zero
  var lettersRemain = word.length;
  while (lettersRemain > 0){
      alert(answerWord.join(" "));
      
  // Prompts user to press a letter key      
  var playerGuess = prompt("Press any letter key to get started");

  // Checks for one letter input by user
      function oneLetter()
          {
            var charCode = event.KeyCode;
            if(!(charCode > 64) && (!(charCode < 91)))
               {
                   alert("Please enter a single letter");
               }             
            else
               {
                   //Continues to update the game
                   for (var j = 0; j < word.length; j++)
                    {
                       if  (word[j] === playerGuess)
                       {
                           answerWord[j] = playerGuess;
                           lettersRemain--;
                       }
                   }
               }
                    
        }
    }
  /*
  // Function call to check input of user
  oneLetter();  

  // Displays the answer
  console.log(answerWord.join(" "));
  console.log("The answer was " + word);
  
 //  Update the DOM for WINS, GUESS REMAINING, and LETTERS GUESSED
 function winFunction() 
   {
      document.getElementById("wins").innerHTML = word;   
   }

 function guessRemain()
   {
      document.getElementById("guesses").innerHTML = lettersRemain; 
   } 
   
 function alreadyGuessed()
   {
      document.getElementById("lettersGuessed").innerHTML = answerWord.join(" ");
   }   
  */