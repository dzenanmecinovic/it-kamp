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
// console.log(NZS(2, 4));
// console.log(NZS(4, 5));
