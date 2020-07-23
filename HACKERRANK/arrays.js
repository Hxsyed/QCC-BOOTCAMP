function getSecondLargest(nums) {
  // Complete the function
  nums.sort(function (a, b) {
    return a - b;
  }); // conv array into increasing order
  var set = new Set(nums); // conv array to set
  var a1 = Array.from(set); // conv set back to array
  console.log(a1);
  var a = a1.length - 2;
  console.log(a1[a]);
  return [a1[a]];
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let set = new Set(a); // conv array to set
// var a1 = Array.from(set); // conv set to array
// console.log(a1);
getSecondLargest(a);
