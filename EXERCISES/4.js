// In this Challenge you will need to find a way to execute the "console.log" on line 15 followed by the correct response for the number guessed.  Do not manipulate the conditional statements(if, else if, else)!! Only manipulate the code blocks(the code inside the curly brackets {})!!  Goodluck!!

// GUESS THE NUMBER

function guessTheNumber(num) {
  if (num === 5) {
    console.log("last line in the function!");
  }
  if (num === 5) {
    return (message = "You guessed the correct number!!");
  } else if (num === 4 || num === 6) {
    return (message = "Your very close!");
  } else {
    return (message = "keep guessing!!");
  }
}

guessTheNumber(5);
// Feel free to change the argument to any number.
// guessTheNumber(10000000)

//Example Output should Equal

/* guessTheNumber(5)
 "last line in the function!"
  'You guessed the correct number!!'
  */
