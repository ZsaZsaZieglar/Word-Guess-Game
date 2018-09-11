// Word base for user to guess 

var word = [
    "rottweiler",
    "mastiff",
    "poodle",
    "collie"
   ]; 
   //store randomly picked word 
   var pickedLetter;
   //store picked word's characters
   var pickedLetterArray = [];
   //placeholders for characters
   var pickedLetterPlaceholder = [];
   var win =0;
   var loss = 0;
   //store the guessed characters
   var lettersGuessed = [];
   var guessesLeft;

   function play()
   { 
       guessesLeft = 15;
       document.getElementById("guessLeft").innerHTML = guessesLeft;
       lettersGuessed = [];

  // Computer selects a random word from the word base and substitue blanks 
  pickedLetter = word[Math.floor(Math.random()*word.length)];
  console.log("Picked Letter: "+pickedLetter);
  pickedLetterArray = pickedLetter.split(""); //["p","o","o","d","l","e"]

  pickedLetterPlaceholder = [];
  for (var i = 0; i < pickedLetterArray.length; i++){
      pickedLetterPlaceholder.push("___ ");
  }
  var placeholderString = pickedLetterPlaceholder.join("");
  document.getElementById("placeholders").innerHTML = placeholderString;
   }

   document.onkeyup = function(event){
       var userGuess = event.key;
        for(var i=0;i<pickedLetterArray.length;i++){
            //guessed letter check
            if(userGuess === pickedLetterArray[i]){
                pickedLetterPlaceholder[i] = userGuess;
                document.getElementById("placeholders").innerHTML = pickedLetterPlaceholder;
            }
        }

        if(lettersGuessed.indexOf(userGuess)!= -1){
            document.getElementById("err_msg").innerHTML = ("Please select another Character");
        }
        else{
            guessesLeft--;

            if(guessesLeft === 0)
            {
                loss++;
                document.getElementById('losses').innerHTML = loss;
                play();
            }

            lettersGuessed.push(userGuess);
            document.getElementById("err_msg").innerHTML = "";
            document.getElementById("guessed_char").innerHTML = lettersGuessed;
            document.getElementById("guessLeft").innerHTML = guessesLeft;
        }

        if(pickedLetterArray.join("") === pickedLetterPlaceholder.join("")){
            win++;
            document.getElementById("wins").innerHTML = win;
        }
   }