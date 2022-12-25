function proveriIme(ime) {
  if (ime == null || ime == "") {
    alert("Morate uneti ime");
    return false;
  }
  if (ime.length > 20) {
    alert(`Username ne sme imati vise od 20 karaktera.`);
  }
  return true;
}
function proveriLozinku(lozinka1) {
  if (lozinka1 == "") {
    alert(`Polje za upis lozinke ne sme biti prazno`);
    return false;
  }
  if (lozinka1.length < 8 || lozinka1.length > 16) {
    alert(`Lozinka ne sme biti kraca od 8 ili veca od 16 karaktera.`);
    return false;
  }
  return true;
}
