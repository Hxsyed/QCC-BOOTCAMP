function digital_root(n) {
  // ...
  // 16  -- > 1 + 6 = 7
  // 942  -- > 9 + 4 + 2 = 15  -- > 1 + 5 = 6
  // 132189  -- > 1 + 3 + 2 + 1 + 8 + 9 = 24  -- > 2 + 4 = 6
  // 493193  -- > 4 + 9 + 3 + 1 + 9 + 3 = 29  -- > 2 + 9 = 11  -- > 1 + 1 = 2
  var sum = 0;
  while (n !== 0) {
    sum = sum + (n % 10);
    n = n / 10;
    n = Math.floor(n);
  }
  while (sum > 10) {
    n = sum;
    sum = digital_root1(n);
  }
  console.log(sum);
  return sum;
}

function digital_root1(n) {
  var sum = 0;
  while (n !== 0) {
    sum = sum + (n % 10);
    n = n / 10;
    n = Math.floor(n);
  }
  return sum;
}

// digital_root(16); // 7
// digital_root(456); // 6
// digital_root(493193); // 2
digital_root(132189); // 6
