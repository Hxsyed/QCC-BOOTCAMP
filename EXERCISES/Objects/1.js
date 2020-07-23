/*
Write a function that takes a string of text (containing ONLY lowercase letters) and returns an object containing the count for each letter in the string. 
*/

function frequency(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
    // var lol = new Set(array); // conv to set
    // var array = Array.from(lol); // conv back to array
    // return array; // return array
    console.log(str[i], ":", count);
    count = 0;
  }
}

frequency("abca"); // -> {a:2,b:1,c:1}
