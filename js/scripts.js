// Business Logic
var testApple = function(word) {
  return("appleay");
}

var testAnyWord = function(word) {
  return (word + "ay");
}

var testVowel = function(word) {
var wordsplit = word.split("")
  if (wordsplit[0] === "a" || wordsplit[0] === "e" || wordsplit[0] === "i" || wordsplit[0] === "o" || wordsplit[0] === "u") {
    return true;
  } else {
    return false;
  }
}

var addAyIfVowel = function(word) {
  var wordsplit = word.split("")
  if (wordsplit[0] === "a" || wordsplit[0] === "e" || wordsplit[0] === "i" || wordsplit[0] === "o" || wordsplit[0] === "u") {
    return (word + "ay");
  } else {
    return false;
  }
}

var moveFirstLetter = function(word) {

  var wordsplit = word.split("");
  var first = wordsplit.slice(0,1);
  var last = wordsplit.slice(1);
  var result = last.concat(first);
  return result.join("");
}


// User Logic
$(document).ready(function(){
  $("form#pig-latin").submit(function(){
    event.preventDefault();

    var myWord = $("#word").val();
    $("#listResults").append("<li>" + testApple(myWord) + "</li>");
    $("#listResults").append("<li>" + testAnyWord(myWord) + "</li>");
    $("#listResults").append("<li>" + testVowel(myWord) + "</li>");
    $("#listResults").append("<li>" + addAyIfVowel(myWord) + "</li>");
    $("#listResults").append("<li>" + moveFirstLetter(myWord) + "</li>");
  });
});



// var wordsplit = word.split("");
// var length = parseInt(wordsplit.length);
// var final = [];
// final.push(wordsplit.slice(1, length));
// final.push(wordsplit.slice(0,1));
// myResult = final.join("");
// alert(final);
// alert(myResult);
