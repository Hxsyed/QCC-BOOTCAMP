/*
Write a function that takes a string of text (containing ONLY lowercase letters) and returns an object containing the count for each letter in the string. 
*/

function frequency(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj;
}

frequency("abca");
