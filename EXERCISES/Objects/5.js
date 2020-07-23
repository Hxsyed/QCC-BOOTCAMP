/*
Filling in the blanks

As a captain, deciding upon the deckhand names is tough! So unless someone already has a nickname, they become n00bie.

Write a function called deckHandNames that takes a name and an age and returns a deckhand object with those properties attached to it. If someone fails to put a name in, default to n00bie. If someone fails to put an age in, default to 0.
*/
function deckHandNames(name, age) {
  var deckhand = {};
  if (typeof name === "number") {
    age = name;
    deckhand.name = "n00bie";
    deckhand.age = name;
  } else if (typeof name === "string") {
    deckhand.name = name;
    deckhand.age = 0;
  } else {
    deckhand.name = name;
    deckhand.age = age;
  }
  return deckhand;
}

// deckHandNames("OneEyeSam", 12)    // => {name: 'Sam', age: 12}
// deckHandNames(15)    // => {name:'n00bie', age: 15}
deckHandNames("Skinny"); //=> {name: "Skinny", age: 0}
