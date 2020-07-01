/*Challenge 3!!

You made it this far on hard work.  Lets go on a VACATION!!

Find a way in the tripToHawaii() function return "Good luck and Bon Voyage!"

Think about the error message we are getting and what the function needs to perform the returns inside the conditionals. */

//VACATION!!

function tripToHawaii(str1, str2, str3) {
  if (map && phoneCharger) {
    if (packed === "ready") {
      return "Good luck and Bon Voyage!";
    } else if (packed === "need more supplies") {
      return "Amazon has express shipping!";
    } else if (packed === "need luggage") {
      return "Can only be 50 pounds!";
    } else {
      return "Are you ready or not?";
    }
  } else if (map || phoneCharger) {
    return "You need both items, map and a phoneCharger";
  } else {
    return "You have a lot of work to do, hopefully you packed!";
  }
}

var map = 1;
var phoneCharger = 1;
var packed = "ready";

tripToHawaii(map, phoneCharger, packed);
