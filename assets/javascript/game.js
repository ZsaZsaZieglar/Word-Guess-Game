var word = [
    "rottweiler",
    "mastiff",
    "poodle",
    "collie"
   ];  
  
  var word = word[Math.floor(Math.random()*word.length)];
  var answerWord = [];
  for (var i = 0; i < word.length; i++){
      answerWord[i] = "_";
  }
  console.log(answerWord);
  var lettersRemain = word.length;
  while (lettersRemain > 0){
      alert(answerWord.join(""));
      function oneLetter()
          {
            var charCode=event.KeyCode;
            if((charCode > 64 && < 91 || 
               (charCode > 96 && charCode < 123) || charCode == 8)) 
                return true;
            else
                return false;    
        }
      
      var playerGuess = prompt("Guess what letter I'm thinking of ");
  }