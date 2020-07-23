function sumOfEvens(num1, num2) {
  var sum = 0;
  //   while (num1 <= num2) {
  //     if (num1 % 2 === 0) {
  //       sum += num1;
  //       num1++;
  //     }
  //   }
  for (var i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

var testCase0 = sumOfEvens(1, 5);
console.log("testCase0:", testCase0);
// 6

var testCase1 = sumOfEvens(10, 20);
console.log("testCase1:", testCase1);
90;

var testCase2 = sumOfEvens(-100, 100);
console.log("testCase2:", testCase2);
// 0
