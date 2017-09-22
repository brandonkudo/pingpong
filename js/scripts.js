var pingPong = function(userInput) {
  var arrayNumbers = [];
  if (userInput > 0) {
      for (var i = 1; i <= userInput; i++) {
        arrayNumbers.push(i);
      }
      arrayNumbers.forEach(function(number) {
        if (number % 15 === 0) {
          arrayNumbers[number-1] = 'ping-pong';
        } else if (number % 3 === 0) {
          arrayNumbers[number-1] = 'ping';
        } else if (number % 5 === 0) {
          arrayNumbers[number-1] = 'pong';
        }
      });
  }
  return arrayNumbers;
}



$(document).ready(function() {
  $('form#formOne').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#userInput').val();
    var showResults = function(arrayOutput) {
        $('ul#result').empty();
      arrayOutput.forEach(function(item) {
        $('ul#result').append('<li>' + item + '</li>');
      });
      return;
    }

    showResults(pingPong(userInput));

  });
});
