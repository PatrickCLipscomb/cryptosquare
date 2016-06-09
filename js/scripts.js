var romanNumeralsArray = [];
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#number').val();
    cryptoSquare(userInput);
    // $('#result').text(answer);
  });
});

var illegalChars = ['!', '@', '#', '?', ',', '.', '&', "(", ')',]

var insertAtt = function(string, index , subString) {
  return string.substr(0, index) + subString + string.substr(index);
}


var cryptoSquare = function(sentence) {
var string = sentence.toLowerCase();
debugger;
for (var i = 0; i < string.length; i++) {
  if ( illegalChars.includes(string.charAt(i))) {
    string = string.replace(string[i], " ");
  }
}
string = string.replace(/\s/g,'');
var codeWord='';
var boxCol = Math.floor(Math.sqrt(string.length));
  for (var j = 0; j < boxCol; j++) {
    for (var i = j; i < string.length; i += boxCol) {
      codeWord +=(string.charAt(i));
    }
  }
  codeWord = insertAtt(codeWord, 5, " ");

  alert(codeWord);
}
