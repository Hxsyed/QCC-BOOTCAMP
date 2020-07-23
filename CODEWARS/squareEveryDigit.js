function squareDigits(num) {
  //may the code be with you
  var arr = [];
  //may the code be with you
  num = num.toString(); // conv num to string
  for (var i = 0; i < num.length; i++) {
    var square = num[i] * num[i];
    arr.push(square);
  }
  var lol = arr.join("");
  var a = parseInt(lol);
  return a;
}


