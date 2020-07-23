function factorial(n) {
  var fac = 1;
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

var fac = factorial(4);
console.log(fac);
