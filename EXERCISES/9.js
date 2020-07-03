/*


QUESTION 1:

Create a function that accepts one argument, the number of times to console.log 'hello world'

e.g.

INPUT: repeatHelloWorld(2)
OUTPUT: 
hello world
hello world


*/

console.log("Question # 1");
function repeatHelloWorld(numberOfTimesToRepeat) {
  //code here
  for (var i = 0; i < numberOfTimesToRepeat; i++) {
    console.log("hello world");
  }
}

repeatHelloWorld(12);
/*

QUESTION 2:


Create a function that accepts one argument, an integer and console.logs from 0 up to the argument

e.g.

INPUT: printIncrement(3)
OUTPUT: 
0
1
2
3
*/

console.log("Question # 2");

function printIncrement(number) {
  //code here
  for (var i = 0; i <= number; i++) {
    console.log(i);
  }
}

printIncrement(3);

/* 
QUESTION 3:

- Repeat A String

Create a function "repeat" that accepts two arguments, the string to repeat and the a number that represtents how many times to repeat the string argument.  Return a string that concatenates all the times the string is repeated.

**Examples**

- INPUT: `repeat("yo",4);`
- OUTPUT: `'yoyoyoyo'`

- INPUT: `repeat("yo",0);`
- OUTPUT: `''`

- INPUT: `repeat("bye",6);`
- OUTPUT: `'byebyebyebyebyebye'`

Write Code Below
*/

console.log("Question # 3");

function repeat(str, num) {
  var str1 = "";
  for (var i = 0; i < num; i++) {
    str1 = str + str1;
  }
  return str1;
}

var answer3 = repeat("yo", 10);

console.log(answer3);

/* 
QUESTION 4:
 - Vowel Count

- Description:

Create the function "vowelCount(str)" that takes a str parameter and returns the number of vowels 
the string contains (ie. "COMPUTER PROGRAMMER" would return 6).  

**Do not count 'y' as a vowel for this challenge.**

**Example**

- INPUT: `vowelCount("Good Job");`
- Return Value: `3`

*** Write the vowelCount Function below *** */

console.log("Question # 4");
function vowelCount(str) {
  var vowels = 0;
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "a" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "o" ||
      str.charAt(i) === "u"
    ) {
      vowels++;
    } else if (
      str.charAt(i) === "A" ||
      str.charAt(i) === "E" ||
      str.charAt(i) === "I" ||
      str.charAt(i) === "O" ||
      str.charAt(i) === "U"
    ) {
      vowels++;
    }
  }
  return vowels;
}

var a = vowelCount("Everyone is doing a great job!");
console.log(a);

/* 
QUESTION 5: 
Reverse a String

- Description

Create the function "reverseString" that reverses a string and returns the value of the reversed string. NOTE: Do NOT use the .reverse() method.

INPUT: reverseString("hello");
OUTPUT: "olleh";

*** Write the reverseString Function below ***

*/

console.log("Question # 5");
function reverseString(str) {
  var revstr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    revstr = revstr + str.charAt(i);
  }
  console.log(revstr);
}

reverseString("hello");

/*
QUESTION 6:

Sum Of Digits- Exercise Link

Create the function sumOfDigits that adds individual digits of a number and return the sum.


**Example:**

- INPUT: `sumOfDigits(414);`
4+1+4
- Return Value: `9`

- INPUT: `sumOfDigits(2913);`
- Return Value: `15`


TIP:

You may need to use the following methods or operators in your solution, reference the workshop page for additional information.

flooring a number will round down
Math.floor(5.84) ==> 5

modulo is an operator that will give you the remainder from division
414 % 10 ==> 4
since 5 divided by 2 equals 


*/
console.log("Question # 6");
function sumOfDigits(num) {
  var sum = 0;
  while (num !== 0) {
    sum = sum + (num % 10);
    num = num / 10;
    num = Math.floor(num);
  }
  console.log(sum);
}
sumOfDigits(414);

/*
QUESTION 7:
[Factorial] - Exercise Link

Create the function factorial(num) that returns the factorial of the parameter.

Not sure what the factorial is? Check this [link for a refresher!](http://www.rapidtables.com/math/algebra/Factorial.htm)

**Example:**

- INPUT: `factorial(4);`
- Return Value: `24`
// 4 * 3 * 2 * 1
*/

console.log("Question # 7");

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
  return num;
}
var fac = factorial(3);
console.log(fac);

/* 
QUESTION 8:


Challenge - under_score to camelCase

Write a function to convert a variable name from under_score format to camelCase.
Make sure you support an unlimited number of underscores in the input!
*/

// Examples:

// underToCamel("first_name"); // should return firstName
// underToCamel("income_tax"); // should return incomeTax

// Write Code Below

console.log("Question # 8");
function underToCamel(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "_") {
      var uppercase = "";
      var lowercase = "";
      uppercase = str.charAt(i + 1).toUpperCase(i + 1);
      lowercase = str.charAt(i + 1).toLowerCase(i + 1);
      str = str.replace("_", "");
      str = str.replace(lowercase, uppercase);
    }
  }
  return str;
}

var str1 = underToCamel("first_name_hi");
console.log(str1);
