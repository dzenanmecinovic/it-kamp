////////////////////////////// spin words ////////////////////////

function spinWords(string) {
  let reci = string.split(" ");
  for (let i = 0; i < reci.length; i++) {
    if (reci[i].length >= 5) {
      reci[i] = reci[i].split("").reverse().join("");
    }
  }
  return reci.join(" ");
}
console.log(spinWords("Hey fellow warriors"));

//////////////////////////////////// like system ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
/////////////////////////////////////////////////////////////////////////////////////////
function likes(names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === 0) {
      return `No one likes this`;
    } else if (names[i] === 1) {
      return `${names[0]} likes this post.`;
    } else if (names[i] === 2) {
      return `${names[0]} i ${names[1]} like this post.`;
    } else if (names[i] === 3) {
      return `${names[0]}, ${names[1]}, ${names[2]} like this post.`;
    } else if (names[i] === 4) {
      return `${names[0]}, ${names[1]} and 2 others like this post.`;
    }
  }
}
console.log(likes([]));

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
var position = "Sredina".length / 2;
console.log(position);
console.log(position);
/////////////////////////////////////////////////////////////////////////////////////////
function isPrimeNumber(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
console.log(isPrimeNumber(73));
/////////////////////////////////////////////////////////////////////////////////////////
// function digitalRoot(number) {
//   let sum = number;
//   let arr = [];
//   let reducer = (a, b) => parseInt(a) + parseInt(b);
//   if (sum = number; sum > 9; sum++) {
//     arr = sum.toString().split("");
//     sum = arr.reduce(reducer);
//     return sum;
//   } else if (sum < 9) {
//     return sum;
//   }
// }
// console.log(digitalRoot(132189));

function digitalRoot(number) {
  let sum = number;
  let arr = [];
  let reducer = (a, b) => parseInt(a) + parseInt(b);

  while (sum > 9) {
    arr = sum.toString().split("");
    sum = arr.reduce(reducer);
  }

  return sum;
}
if (sum < 9) {
  var sum = number;
  return sum;
}
////////////////////////////////////////////////////
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}
console.log(digital_root(132189));
console.log(((852 - 1) % 9) + 1);
////////////////////////////////////////////////// walk - the app //////////////////////////////////////
function isValidWalk(walk) {
  let ns = 0,
    ew = 0;
  if (walk.length === 10) {
    for (let i of walk) {
      if (i == "n") ns += 1;
      if (i == "s") ns -= 1;
      if (i == "e") ew += 1;
      if (i == "w") ew -= 1;
    }
  } else return false;
  return ns === 0 && ew === 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
////////////////////// Hashtag Generator //////////////////////
function generateHashtag(str) {
  if (str.trim() === "") return false;
  const promene = str
    .split(" ")
    .map((rec) => rec.charAt(0).toUpperCase() + rec.slice(1))
    .join("");
  const promeneSaHestegom = `#${promene}`;
  return promeneSaHestegom.length > 140 ? false : promeneSaHestegom;
}
console.log(generateHashtag("je ste se s es"));

/////////////////////////////// count duplicates ////////////////////////////
function duplicateCount(text) {
  let result = 0,
    soltingObject = {};
  text
    .toLowerCase()
    .split("")
    .map((str) => {
      if (!soltingObject.hasOwnProperty(str)) {
        soltingObject[str] = 0;
      } else {
        if (soltingObject[str] === 0) {
          result += 1;
        }
        soltingObject[str] = soltingObject[str] + 1;
      }
    });
  return result;
}
console.log(duplicateCount("Indivisibilities"));
