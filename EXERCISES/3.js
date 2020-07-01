// IF/Else challenges

//Challenge #1!!  Fill in the condition in the if statement with any comparision operator.  It will console.log() if the condition is True.

if (5 > 3) {
  console.log("#1", "The condition is true");
  //block of code to be executed if the condition is true
}

//Challenge #2!!  Fill in the condition in the if statement with any comparision operator.  It will console.log() if the condition is True.  Else will log if the condition is false.
// IF/ELSE STATEMENT

if (10 > 7) {
  console.log("#2", "the condition is true");
  //block of code to be executed if the condition is true
} else {
  console.log("#2", "the condition is false");
  //block of code to be executed if the condition is false
}

//Challenge 3!!  Fill in the argument for num in the function and get it to print out the correct log.

// GREATER THAN 10

function greaterThanTen(num) {
  if (num > 10) {
    console.log("#3", "num is greater than 10");
  } else {
    console.log("#3", "num is not greater than 10");
  }
}

// unComment the invoked function using command(mac) + / or Control(windows) + /   Then fill in a number as an agrument in the invoked function below.

greaterThanTen(11);

//Challenge 4!!  Fill in the argument for num in the function and get it to print out the correct log.  Feel free to change the number to get different responses.

// GUESS THE NUMBER

function guessTheNumber(num) {
  if (num === 5) {
    console.log("#4", "You guessed the number!!");
  } else if (num === 4 || num === 6) {
    console.log("#4", "Your very close!");
  } else {
    console.log("#4", "keep guessing!!");
  }
}
// Use a number here as an argument.
guessTheNumber(5);

//Challenge 5!! Fill in the arguments to get the correct log!

//LOGICAL OPERATORS

// &&  "AND"

function beautifulDay(sky, clouds) {
  // var sky = 'blue';
  // var clouds = false;
  if (sky !== "blue" && clouds === true) {
    console.log("#5", "Cloudy Day");
  } else {
    console.log("#5", "Its a Beautiful Day!");
  }
}

// fill in the arguments in beautifulDay
beautifulDay("blue", true);

/*Challenge 6!!  Once again fill in the arguments to understand what output you will go with the || operator.
Feel free to change around code to get the correct message.
*/

// || "OR"
function beautifulDayTwo(sky, clouds) {
  // var sky = 'blue';
  // var clouds = false
  if (sky !== "blue" || clouds === true) {
    console.log("#6", "Cloudy Day");
  } else {
    console.log("#6", "Its a Beautiful Day!");
  }
}
//fill in the arguments in beautifulDayTwo()
beautifulDayTwo("blue", false);

//Challenge 7!!  Use the ! operator in the if() statement.  See what output you get.

function beautifulDayThree(sky, clouds) {
  // var sky = 'blue';
  // var clouds = false;
  if (sky === "blue" && clouds !== true) {
    console.log("#7", "Its a Beautiful Day");
  } else {
    console.log("#7", "Cloudy Day!");
  }
}

//fill in the arguments in beautifulDayThree()
beautifulDayThree("blue", false);

// Challenge 8!! Fill in the argument and see if the value is Truthy or Falsy!!!
//Truthy, Falsy

function trueOrFalse(val) {
  if (val) {
    console.log("#8", "The Value is Truthy");
  } else {
    console.log("#8", "the value is Falsy");
  }
}

//fill in the argument here
trueOrFalse(8);
