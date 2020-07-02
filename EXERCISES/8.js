/* Challenge #2

#1

In this challenge we want to use the charAt() to print out a specific message
*/

var str = "United States of America";
var str1 = str.charAt(0) + str.charAt(7) + str.charAt(17);
console.log(str1.toLowerCase());

// By using the charAt() method print out USA and then I dont want it capitalized. Use the correct method to print out usa

/*

#2

In this challenge we want to use the includes() method.  I want to see if the string value in the variable has the specific word put into the includes() argument.  Use Conditionals to keep practicing with If/else statements.
*/

var includesExample = "One small step for man, One giant leap for mankind";

if (includesExample.includes("One")) {
  console.log(true);
} else {
  console.log(false);
}

/* 

#3

In this challenge we want to use the toString() method.  This will a variables value into a string when used correctly.  Use Conditionals to keep practicing if/else statements.
print out the message in console.log()
*/

var num = 15;
var a = num.toString();
var b = num.toString(2);
var c = num.toString(8);
var d = num.toString(16);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
