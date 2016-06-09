var romanNumeralsArray = [];
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#number').val();
    cryptoSquare(userInput);
    // $('#result').text(answer);
  });
});

var insertAtt = function(string, index , subString) {
  return string.substr(0, index) + subString + string.substr(index);
}


var cryptoSquare = function(sentence) {
var string = sentence.replace(/\s/g,'');
var codeWord='';
var boxCol = Math.floor(Math.sqrt(string.length));
  for (var j = 0; j < boxCol; j++) {
    for (var i = j; i < string.length; i += boxCol) {
      codeWord +=(string.charAt(i));
    }
  }
  debugger;
  codeWord = insertAtt(codeWord, 5, " ");

  alert(codeWord);
}
