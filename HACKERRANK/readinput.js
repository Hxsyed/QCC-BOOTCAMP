function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  var pi = Math.PI;
  var r = readline();
  var area = pi * Math.pow(r, 2);
  // Print the area of the circle:
  console.log(area);

  var perimeter = 2 * pi * r;
  // Print the perimeter of the circle:
  console.log(perimeter);
}
