function NZS(a, b) {
  let veci = Math.max(a, b);
  let nzs;
  while (1 <= veci) {
    if (veci % a === 0 && veci % b === 0) {
      nzs = veci;
      break;
    }
    veci++;
  }
  return nzs;
}
console.log(NZS(2, 4));
console.log(NZS(4, 5));

// nzs
// root
// const NZS = (br1, br2) => {
//   const veci = Math.max(br1, br2);
//   let i = veci;
//   let nzs;
//   while (true) {
//     if (i % br1 === 0 && i % br2 === 0) {
//       nzs = i;
//       break;
//     }
//     i++;
//   }
//   return nzs;
// };

// console.log(NZS(5, 1));
// console.log(NZS(5, 4));
// console.log(NZS(6, 4));
