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