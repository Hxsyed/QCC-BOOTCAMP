/* 
PLEASE DO NOT TOUCH THE TEST SECTION

ALL FUNCTION HAVE BEEN DECLARED FOR YOU BUT YOU WILL NEED TO 
MANIPULATE THE DEFINITION ALONG WITH THE PARAMETERS



EVERY TIME YOU RUN THE TEST, THE CONSOLE SAVES YOUR LAST TEST CASES
TO REMOVE THEM, CLICK ON THE X SYMBOL AT THE TOP RIGHT INSIDE THE 
CONSOLE

*/

/* 
EXAMPLE

CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND ADDS OR MUTATES (MEANING CHANGE) THE ZEROTH ELEMENT TO ZERO AND RETURNS THAT ARRAY

e.g. 

mutateZeroElem([]) ===> [0]
mutateZeroElem([1]) ===> [0]
mutateZeroElem([1,2,3]) ===> [0, 2, 3]

*/

function mutateZeroElem(anyArray) {
  // THIS CAN CHANGE THE ARRAY'S ELEMENT, WITHOUT REASSIGNING THE PARAMETER anyArray
  anyArray[0] = 0;
  return anyArray;
}

/* 
QUESTION 1

CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND ADDS THE BOOLEAN true TO THE END AND RETURNS THAT ARRAY. DO NOT USE array.push(elem)!!!!!

e.g. 

pushTrue([]) ===> [true]
pushTrue([1]) ===> [1, true]
pushTrue([1,2,3]) ===> [1, 2, 3, true]

*/

function pushTrue(arr) {
  var length = arr.length;
  if (arr.length === 0) {
    arr[0] = true;
  } else {
    arr[length] = true;
  }
  return arr;

  // CODE HERE
}

/* 
QUESTION 2

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS, AN ARRAY AND A VALUE IT THEN PUSHES THE VALUE INTO THE END OF THE ARGUMENT AND RETURNS THE ARRAY
PLEASE DO NOT USE array.push()

e.g. 

mutateZeroElem([]) ===> [true]
mutateZeroElem([1]) ===> [1, true]
mutateZeroElem([1,2,3]) ===> [1, 2, 3, true]

*/

function push(array, value) {
  // CODE HERE
  var length = array.length;
  if (array.length === 0) {
    array[0] = value;
  } else {
    array[length] = value;
  }
  return array;
}

/* 
QUESTION 3

CREATE A FUNCTION THAT TAKES ONE ARGUMENTS, AN ARRAY AND THEN ITERATES (LOOPS OVER) THE ARRAY AND LOGS TO THE CONSOLE EACH ELEMENT


e.g. 

printElements([1, true, 'I am the third element', 'my index is 3 confusing right']) ===> 
OUTPUT:

1
true
'I am the third element'
'my index is 3 confusing right'

*/

function printElements(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  // CODE HERE
}

/* 
QUESTION 4

CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND RETURNS A NEW ARRAY THAT HAS ONLY UNIQUE VALUES IN THE SAME ORDER THEY FIRST APPEAR IN THE ORIGINAL ARRAY

DON'T USE indexOF!!!!!!

YOU MAY WANT TO USE AN INNER FOR-LOOP:

for(var i = 0; i < array.length; i++) {

  for(var j = 0; j < array2.length; j++) {

    DO SOMETHING HERE

  }
}

e.g.

unique([1,1,1,1,1,1]) ===> [1];

unique([1,2,3,2,3,2]) ===> [1, 2, 3];
*/

function unique(array) {
  // CODE HERE
  var lol = new Set(array); // conv to set
  var array = Array.from(lol); // conv back to array
  return array; // return array
}
/* 
QUESTION 5

CREATE A FUNCTION THAT TAKES TWO ARRAYS AND RETURN true IF THEY CONTAIN TWO OF THE SAME ELEMENTS OTHERWISE RETURN FALSE
DO NOT USE indexOf



*/

function compare(array, array2) {
  // CODE HERE
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

/* 
QUESTION 6

CREATE A FUNCTION THAT TAKES TWO ARRAYS AND RETURNS A NEW ARRAY THAT HAS ELEMENTS THAT BOTH ARGUMENTS CONTAIN, THERE WILL BE NO DUPLICATES


compareArrays([1, 2, 3, 4], [5, 6, 7, 8]) ===> []
compareArrays([1, 2, 3, 4], [1, 2]) ====> [1, 2]


*/

function compareArrays(array1, array2) {
  // CODE HERE
  var array3 = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        array3.push(array1[i]);
      }
    }
  }
  return array3;
}

/* 
QUESTION 7

TAKES TWO ARRAYS AND RETURNS AN ARRAY THAT HAS ELEMENTS THAT ARE UNIQUE TO THE FIRST ARRAY!

e.g. 

compareArraysOpposite([1,2,3,4], [1,3]) ===> [2, 4]

*/

function compareArraysOpposite(array1, array2) {
  // CODE HERE
  var opp = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = i; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        break;
      } else {
        opp.push(array1[i]);
      }
      break;
    }
  }
  return opp; // returns array
}

/* 
TEST SECTION, PLEASE DO NOT TOUCH




*/

const Mocha = require("mocha");

const runner = new Mocha({});

runner.addFile("./test.js");

runner.run();

module.exports = {
  mutateZeroElem,
  pushTrue,
  push,
  printElements,
  unique,
  compare,
  compareArrays,
  compareArraysOpposite,
};

console.log("");
