/*

Ask Nicely


- Description

Create the function askNicely that accepts a sentence 
as an argument. If the last character of the sentence is 
a question mark, then make sure the question ends with 
the word "please".

If the sentence is not a question, then return the 
inputted string without modification. If the sentence 
is a question, but already has a please, then also
return the input without modification.

**Examples**

askNicely("May I borrow your pencil?");
// returns "May I borrow your pencil please?"

askNicely("May I ask a question please?");
// returns "May I ask a question please?"

askNicely("Qcc bootcamp summer class.");
// returns "Qcc bootcamp summer class."


Write Code Below
*/
function askNicely(sentence) {
  if (sentence.includes("?") && sentence.includes("please")) {
    return sentence;
  } else if (sentence.includes(".")) {
    return sentence;
  } else {
    var str1 = sentence.slice(0, -1);
    var str2 = str1 + " please?";
    return str2;
  }
}

// askNicely("Can I have the answers.")
// askNicely("Can I have the answers?")
askNicely("Can I have the answers please?");
