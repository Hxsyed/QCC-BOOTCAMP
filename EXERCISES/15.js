
function indexOf(str1, str2) {
    console.log(str1, str2)
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            if (str1[i] === str2[0]) {
                return i
            }
        }
    }
    return -1
}


var testCase0 = indexOf('balloons are fun', 'all');
console.log('testCase0:', testCase0);
// 1

var testCase1 = indexOf('where in the world is', 'Carmen Sandiego');
console.log('testCase1:', testCase1);
// -1

var testCase2 = indexOf('secrets secrets are no fun', 'no fun');
console.log('testCase2:', testCase2);
// 20