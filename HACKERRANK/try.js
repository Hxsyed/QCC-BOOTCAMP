function reverseString(s) {
  var str = "";
  if (typeof s === "number") {
    console.log("s.split is not a function");
    console.log(s);
  }
  for (var i = s.length - 1; i >= 0; i--) {
    str = str + s[i];
  }
  console.log(str);
  return str;
}

reverseString("1234");

// function main() {
//   const s = eval(readLine());

//   reverseString(s);
// }
