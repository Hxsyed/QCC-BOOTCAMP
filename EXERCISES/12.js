/* Write a the function called increment that accepts a number parameter and increments the global count variable.  Make the function also, log the current value of the count after the count is incremented.

Every following call of the function should also should progressively change the value of the count.

*/

var count = 0;

//Write your function here!

function increment(num) {
  count = count + num;
  console.log("The count is now is", count);
  return count;
}

increment(3); // the console should display "The count now is 3"
increment(10); // the console should display "The count now is 13"
increment(-1); // the console should display "The count now is 12"
