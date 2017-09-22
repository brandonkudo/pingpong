var pingPong = function(userInput) {
  var numberArray = [];
  if (userInput > 0) { //positive numbers
      for (var i = 1; i <= userInput; i++) {
        numberArray.push(i);
      }
      numberArray.forEach(function(number) {
        if (number % 15 === 0) {
          numberArray[number-1] = 'pingpong';
        } else if (number % 3 === 0) {
          numberArray[number-1] = 'ping';
        } else if (number % 5 === 0) {
          numberArray[number-1] = 'pong';
        }
      });
  }
  return numberArray;
}

var showResults = function(outputArray) {
    $('ul#result').empty();
  outputArray.forEach(function(item) {
    $('ul#result').append('<li>' + item + '</li>');
  });
  return;
}

$(document).ready(function() {
  $('form#formOne').submit(function(event) {
    var userInput = $('input#userInput').val();

    showResults(pingPong(userInput));

    event.preventDefault();
  });
});
