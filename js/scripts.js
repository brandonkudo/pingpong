var pingPong = function(number) {
  // if (year % 100 === 0) {
  //   return false;
  // } else if (year % 4 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
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

  });

});
