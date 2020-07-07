/*

Please fix the function below to print out "QCC location is on Planet Earth, in the United States, Bayside Queens, New York. "

*/

var place = "on Planet Earth.";
outerFunction();

function outerFunction() {
  var place1 = "in the United States,";
  middleFunction();

  function middleFunction() {
    var place2 = "Bayside Queens,";
    innerFunction();

    function innerFunction() {
      var place3 = "New York,";
      innermostFunction();

      function innermostFunction() {
        place = "on Planet Earth,";
        console.log("QCC location is", place, place1, place2, place3);
      }
    }
  }
}
