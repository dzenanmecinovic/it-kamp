// Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako sto se kombinuju prvi sa prvim, drugi sa drugim, treci sa trecim znakom itd. Ako je jedan string duzi od drugog, na kraju samo dodati znakove viska. Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled".

// function kombinacijaStringova(A, B) {
//     const jedan = A.split("").filter(el => !!el);
//     const dva = B.split("");
//     let kombinovani = "";
//     for(i = 0; i < jedan.length || i < dva.length; i++) {
//         if(i < jedan.length) {
//             kombinovani += jedan[i];
//         } else if(i < dva.length) {
//             kombinovani += dva[i];
//         }
//     }
//     return kombinovani;
// }

// console.log(kombinacijaStringova("kombinacija", "stringova"))

// const str1 = 'abc';
// const str2 = 'def';
// const mergeAlternatively = (str1, str2) => {
//    const a = str1.split("").filter(el => !!el);
//    const b = str2.split("");
//    let mergedString = '';
//    for(var i = 0; i < a.length || i < b.length; i++){
//       if(i < a.length){
//          mergedString += a[i];
//       };
//       if(i < b.length){
//          mergedString += b[i];
//       };
//    };
//    return mergedString;
// };
// console.log(mergeAlternatively(str1, str2));

function kombinovani (str1, str2) {

    var a = str1.split("");
  
    var b = str2.split("");
  
    var spojeniString = '';
  
  
    for(var i = 0; i < a.length || i < b.length; i++) {
     if(i < a.length)
       spojeniString +=  a[i];
     if(i < b.length)
       spojeniString +=  b[i];
    }
  return spojeniString;
  
  }
  console.log(kombinovani('treci tekst','drugi string'));
  console.log(kombinovani('ab','def'));

  function jeLiString(input) {
    if (Object.prototype.toString.call(input) === '[object String]') {
      return true;
    } else {
      return false;
    }
  }

console.log(jeLiString("kako fols"))
console.log(jeLiString([1, 2, 3, 4]))


// ako nesto nije string, vrati: uneta vrednost nije string

function nijeString(input) {
  if(jeLiString(input) === false) {
    return `Taj input: ${input}, nije string.`
  } else {
    return `Taj input: ${input}, jeste string.`
  }
}
var covek = {
  ime: "NVIDIA"
}
console.log(nijeString("input input"))
console.log(nijeString([1, 2, 3]))
console.log(nijeString(covek))

function jeLiBlanko(input) {
  // if(input.length === 0) { // this also works
  if(input === "") {
    return true;
  } else {
    return false;
  }
}
console.log(jeLiBlanko(''))
console.log(jeLiBlanko("ee"))

function svakaRecStringaUNiz(input) {
  return input.split(" ")
}
function svakoSlovoStringaUNiz(input) {
  return input.split("")
}

console.log(svakaRecStringaUNiz("Svaka rec ovog stringa je odvojena u novodobijenom nizu"))
console.log(svakoSlovoStringaUNiz("Svaka rec ovog stringa je odvojena u novodobijenom nizu"))