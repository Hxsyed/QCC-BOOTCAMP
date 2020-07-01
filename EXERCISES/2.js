// QUESTION 1: Simple Sum
// Define a function simpleSum that takes two numbers and returns the sum of those numbers.

// CODE HERE
function simpleSum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
var a = simpleSum(10, 20); // => 30
var b = simpleSum(5, 10); // => 15

console.log(a);
console.log(b);

//----------------------------------------------------------------------------------------

// QUESTION 2: Default Greet
// Define a function, defaultGreet, that takes a first and a last name. defaultGreet should return a string greeting for the given names.

// CODE HERE
function defaultGreet(name1, name2) {
  console.log("Hi " + name1 + " " + name2 + " !");
}

defaultGreet("Haroon", "Syed"); // => 'Hi Chaka Khan!'

//-----------------------------------------------------------------------------------------

// QUESTION 3: Tax Caclulator
// Define a function taxCalculator that accepts the price of an item and a state. taxCalculator should return the after-tax cost of the item, assuming NY's tax is 4% and NJ's sales tax is 6.625%.

// taxCalculator(100, 'NY'); // => 104
// taxCalculator(100, 'NJ'); // => 106.625

// CODE HERE
function taxCalculator(num1, state) {
  if (state == "NY") {
    num1 = 4;
  } else {
    num1 = 6.625;
  }
  sum = 100 + num1;
  return sum;
}
var c = taxCalculator(100, "NY"); // => 104
var d = taxCalculator(100, "NJ"); // => 106.625

console.log(c);
console.log(d);

// Extra credit instead of doing two different functions(one for NY and one for NJ) try and handle both cases in one single function!

//------------------------------------------------------------------------------------------

// QUESTION 4: My Mnemonic
// Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string.

// Note that the user may not pass in all four strings!

// CODE HERE

function myMnemonic(A, B, C, D) {
  return A + B + C + D;
}
var e = myMnemonic("M", "A", "S", "H"); // => MASH
var f = myMnemonic("H", "E", "L", "P"); // => HELP
console.log(e);
console.log(f);

//---------------------------------------------------------------------------------------

// QUESTION 5: Greeting
// Define a function greeting that accepts an optional string argument called name. greeting should return a personalized string if the name is present.

// CODE HERE
function greeting(name) {
  if (name) {
    console.log("Hello " + name + "!");
  } else {
    console.log("Hello! ");
  }
}

greeting("Sadie"); // => Hello Sadie!
greeting(); // => Hello!
