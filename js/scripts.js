var pingPong = function(number) {
  // if (year % 100 === 0) {
  //   return false;
  // } else if (year % 4 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  if ((number % 3 === 0) && (number % 5 !== 0) || (number % 15 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numberInput")).val());
    var result = pingPong(number);

    $(".number").text(number);

    $("#result").show();
  });

});
