function highAndLow(numbers) {
  //...
  var res = numbers.split(" "); // conv string to array
  var max = Number.MIN_VALUE;
  var min = Number.MAX_VALUE;
  for (var i = 0; i < res.length; i++) {
    // var number = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
    if (res[i] < min) {
      min = res[i];
      console.log("line 24", min);
    }
    if (res[i] > max) {
      max = res[i];
      console.log("line 28", max);
    }
  }
  console.log("lmfoaoo");
  console.log(max);
  console.log(min);
  var str1 = max.toString();
  var str2 = min.toString();
  var str3 = str1 + " " + str2;
  return str3;
}

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"); // return "542 -214";

// console.log(Math.max(1, 2, 3, 4)); // 4
// console.log(Math.min(1, 2, 3, 4)); // 1.
