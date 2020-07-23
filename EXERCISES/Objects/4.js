/*

The leet hacker translator!

"Leet" or 1337 is a popular alternative alphabet used by internet "hackers".

Create a translator function that takes a string and outputs that string translated to leet.

The leet codex is below, along with an array of english letters and an array of the corresponding leet characters. Use the two arrays to create a leetCodex object to use in making the translations.


*/

var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
];
var leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
  " ",
];

function translate(str) {
  var arr = [];
  str = str.toLowerCase();
  for (var a = 0; a < str.length; a++) {
    for (var c = 0; c < letters.length; c++) {
      if (str[a] === letters[c]) {
        arr.push(leetChars[c]);
      }
    }
  }
  arr = arr.join(""); // remove commas form the array
  var x = arr.toString(); // conv array to string
  console.log(x);
  // x = x.trim()
  // var xx = x.replace(' ', '')
  return x;
}

translate("QCC Hackers"); // => '(,)(( #@(|<3|25'
