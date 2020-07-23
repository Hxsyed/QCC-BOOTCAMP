function evenWords(str) {
  var arr = [];
  var res = str.split(" ");
  console.log(res.length)
  for (var i = 0; i < res.lenght; i++) {
    console.log("im here");
    if (res[i].length % 2 === 1) {
      var c = res[i].length - 1;
      arr.push(res[i][c]);
      console.log("im here");
    }
  }
  console.log(arr);
  return arr;
}

var testCase0 = evenWords("Let us Start the Day");
console.log("testCase0:", testCase0);
// "Lett us Startt thee Dayy!"

var testCase1 = evenWords("Coffee is only good with Bagels");
console.log("testCase1:", testCase1);
// 'Coffee is only good with Bagels'

var testCase2 = evenWords("Learning JavaScript is Tough but rewarding");
console.log("testCase2:", testCase2);
// 'Learning JavaScript is Toughh butt rewardingg'
