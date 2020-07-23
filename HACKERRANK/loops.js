/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  var vowel = [];
  var nonvowel = s.split("");
  //   console.log(nonvowel);
  for (var i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      vowel.push(s[i]);
    }
  }
  let difference = nonvowel.filter((x) => !vowel.includes(x));
  vowel = vowel.toString();
  vowel = vowel.replace(/,/g, "");
  for (var i = 0; i < vowel.length; i++) {
    console.log(vowel[i]);
  }
  difference = difference.toString();
  difference = difference.replace(/,/g, "");
  for (var i = 0; i < difference.length; i++) {
    console.log(difference[i]);
  }

  return;
}

vowelsAndConsonants("javascriptloops");
// Sample Input 0
// javascriptloops

// Sample Output 0
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
