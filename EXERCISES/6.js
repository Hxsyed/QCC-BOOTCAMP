//Challenge String & Numbers

//#1  Make two variables with strings as values.  Then concat both strings using the + operator.  Print out your results in a console.log()

//Code Here
var str1 = "haroon";
var str2 = "syed";
var str3 = str1 + " " + str2;
console.log(str3);

//#2 Make a variable with a value as a Famous Quote.  Now use the .charAt() method to grab a Specific character and print it out in a console.log().

//Code Here
var famous =
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela";
var c = famous.charAt(22);
console.log(c);

//#3  Find the length of the given string. Use the .length property.  Use Conditionals with specific messages to understand how long the string is.

var stringLength = "Good afternoon Code Ninjas!  Practice makes perfect!";

//Code Here
if (stringLength.length > 0) {
  console.log(stringLength.length);
} else {
  console.log("Your string is empty ");
}

//#4    Use the indexOf() method to find what index the letter w is at in this string. Use Conditionals to let the user know exacly the index of the character your looking for or not.

var indexFinder =
  "This method will find an index of a character where it is at in the sentence.";

//Code Here
console.log(indexFinder.search("w"));

//#5  Use the slice() method to get a new string.  Slice the string so it say. "Once upon a Time"  Print it in a console.log()

var sliceAndDice = "Once upon a Time in a land far, far away!";
console.log(sliceAndDice.slice(0, 16));

//#6  Now use the slice() method again.  Execpt this time use NEGATIVE numbers as arguments to print out the message "in a land far, far way"  Print it out in a console.log()

//Code Here  use the sliceAndDice variable here also.
var e = sliceAndDice.slice(-24, -10);
var f = sliceAndDice.slice(-9, -6);
var g = sliceAndDice.slice(-4, -1);
var h = e + " " + f + " " + g;
console.log(h);

//7  Now do the same thing with slice(), execpt use one POSTIVE and one NEGATIVE number as arguments!  Still printing out "in a land far, far away" in a console.log()

// Code Here  use the sliceAndDice variable here also
var a = sliceAndDice.slice(17, -10);
var b = sliceAndDice.slice(32, -6);
var c = sliceAndDice.slice(37, -1);
var d = a + " " + b + " " + c;
console.log(d);
