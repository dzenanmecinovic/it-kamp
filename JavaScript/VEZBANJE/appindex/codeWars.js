// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(string) {
//   let reci = string.split(" ");
//   for (let i = 0; i < reci.length; i++) {
//     if (reci[i].length >= 5) {
//       reci[i] = reci[i].split("").reverse().join("");
//     }
//   }
//   return reci.join(" ");
// }
// console.log(spinWords("Hey fellow warriors"));

//////////////////////////////////// like system ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
/////////////////////////////////////////////////////////////////////////////////////////
// function likes(names) {
//   for (let i = 0; i < names.length; i++) {
//     if (names[i] === 0) {
//       return `No one likes this`;
//     } else if (names[i] === 1) {
//       return `${names[0]} likes this post.`;
//     } else if (names[i] === 2) {
//       return `${names[0]} i ${names[1]} like this post.`;
//     } else if (names[i] === 3) {
//       return `${names[0]}, ${names[1]}, ${names[2]} like this post.`;
//     } else if (names[i] === 4) {
//       return `${names[0]}, ${names[1]} and 2 others like this post.`;
//     }
//   }
// }
// console.log(likes([]));

function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return names[0] + " likes this";
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return (
      names[0] +
      ", " +
      names[1] +
      " and " +
      (names.length - 2) +
      " others like this"
    );
  }
}

// console.log(likes(["Prvi", "drugi"]));
//// if amount of X and O is the same - retur true - else false; ////////////
function XO(str) {
  let x = 0;
  let o = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
      x++;
    } else if (str[i] === "o" || str[i] === "O") {
      o++;
    }
  }
  if (x == 0 && o == 0) {
    return true;
  } else if (x == o) {
    return true;
  } else {
    return false;
  }
}

// console.log(XO("xxoxo", "o"));

// function XOsolutions(string) {
//   return (
//     string.toLowerCase().split("x").length ===
//     string.toLowerCase().split("o").length
//   );
// }

/////// find the middle character ////////
// function getMiddle(s) {
//   Middle = s.length / 2;
//   if (s.length % 2 !== 0) {
//     return `Neparan`;
//   } else {
//     return Middle;
//   }
// }

// console.log(getMiddle("tris"));

function extractMiddle(s) {
  var position;
  var length;

  if (s.length % 2 !== 0) {
    position = s.length / 2;
    length = 1;
  } else {
    position = s.length / 2 - 1;
    length = 2;
  }

  return `${s.substr(position, length)}`;
}

console.log(extractMiddle("Sredin"));
// console.log(extractMiddle("Sred"));
// console.log(extractMiddle("Sred"));
/////////////////////////////////////////////////////////////////////////////////////////
var string = "Sredin";
var position = "Sredin".length / 2;
var length = 1;
console.log(position);
console.log(string.substr(position, length));
