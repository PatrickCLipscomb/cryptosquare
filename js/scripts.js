// front end logic
var romanNumeralsArray = [];
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#number').val();
    $('#result').text(cryptoSquare(userInput));
  });
});
// back end logic
var cryptoSquare = function(sentence) {
  var string = sentence.toLowerCase().replace(/\W/g,'');
  var codeWord='';
    for (var j = 0; j < Math.floor(Math.sqrt(string.length)); j++) {
      for (var i = j; i < string.length; i += Math.floor(Math.sqrt(string.length))) {
        codeWord +=(string.charAt(i));
      }
    }
    for (var i = 5; i < codeWord.length; i += 6) {
      codeWord = codeWord.substr(0, i) + " " + codeWord.substr(i);
    }
  return codeWord;
}
