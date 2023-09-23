function cokoladica(k, n) {
  const ukupnoPoklona = Math.floor(n / k);
  if (isNaN(k) || isNaN(n)) {
    return "Vrednosti moraju biti iskljucivo brojevi.";
  } else if (k <= 0 || k > 21) {
    return "Broj cokoladica u jednom poklonu mora biti veci od 0 a manji od 21.";
  } else if (n <= 0 || n >= 1000) {
    return "Ukupan broj cokoladica ne moze biti manji od 0 ili veci od 1000.";
  } else {
    return `Ako na raspolaganju imamo ${n} cokoladica, moguce je zapakovati ${ukupnoPoklona} poklona.`;
  }
}

console.log(cokoladica(10, 500));
