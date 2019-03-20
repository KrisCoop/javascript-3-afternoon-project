//destructuring practice...
// var carDetails = {
//     color: 'red',
//     make: 'toyota',
//     model: 'tacoma',
//     year: 1994
//   }
// let {color, make, model, year} = carDetails;

// let object1 = {
//     you: 'guy ',
//     are: 'seriously ',
//     a: 'stop ',
//     douchebag: 'it'
// }
// function hiThere (obj) {
//     let {you, are, a, douchebag} = obj;
//     return 'hey ' + you + ' ' + are + ' ' + a + ' ' + douchebag;
// console.log(hiThere(object1));
// }

// let bearLake = {
//     homeTown: 1,
//     leBeaus: 2,
//     bearTrapper: 3,
//     zips: 4
// }

// function addEats(obj) {
//     let {homeTown, leBeaus, bearTrapper, zips} = obj;
//     dividedSum = (homeTown + leBeaus + bearTrapper + zips)/2;
//     return dividedSum;
// }



//for-in loop practice...

// function addTheStrings(obj) {
//     let newStr = "";
//     for (var x in obj) {
//         newStr += obj[x];
//     }
//     return newStr;
// }

// console.log(addTheStrings(carDetails));

// function concatStrings(obj) {
//     let secStr = "";
//     for (var x in obj) {
//         secStr += obj[x];
//     }
//     return secStr;
// }
// console.log(concatStrings(bearLake));



// kata: https://www.codewars.com/kata/convert-a-boolean-to-a-string/train/javascript (boolean as a string):

// function booleanToString(b){
//     if (b === true) {
//         return "true";
//     }
//     else {
//         return "false";
//     }
//   };

//   // alternative 'best practices' methods:

//   function booleanToString(b){
//     return b.toString();
//   }

//   function booleanToString(b){
//     return b ? 'true' : 'false';
//   }


//kata https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"

// function areYouPlayingBanjo(name) {
//     if (name[0] === 'R' || name[0] === 'r') {
//         return name + " plays banjo";
//     }
//     else {
//         return name + " does not play banjo";
//     }
//   };

//  // better practices versions:

//   function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//   }

/// this kata wants to break up a two-name parameter and abbreviate the name into initials. so, "Kris Cooper" needs to = "K.C":
function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }
console.log(abbrevName(nameArray));