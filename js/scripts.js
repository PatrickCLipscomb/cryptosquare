var romanNumeralsArray = [];
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#number').val();
    cryptoSquare(userInput);
    // $('#result').text(answer);
  });
});

var cryptoSquare = function(sentence) {
var string = sentence.replace(/\s/g,'');
var codeWord='';
debugger;
var boxCol = Math.floor(Math.sqrt(string.length));
  for (var j = 0; j < boxCol; j++) {
    for (var i = j; i < string.length; i += boxCol) {
      codeWord +=(string.charAt(i));
    }
  }
  alert(codeWord);
}
