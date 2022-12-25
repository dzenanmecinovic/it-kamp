function proveriIme(ime) {
  if (ime == null || ime == "") {
    alert("Morate uneti ime");
    return false;
  }
  return true;
}
function proveriPrezime(ime) {
  if (ime == null || ime == "") {
    alert("Morate uneti prezime");
    return false;
  }
  return true;
}
function proveriZemlju(select) {
  if (select.selectedIndex == 0) {
    alert(`Morate odabrati zemlju`);
    return false;
  }
  return true;
}
function proveriLozinku(password1, password2) {
  if (password2 !== password1) {
    alert(`Lozinke moraju biti iste`);
    return false;
  }
  if (password1 == "") {
    alert(`Polje za upis lozinke ne sme biti prazno`);
    return false;
  }
  return true;
}
function proveriSaglasnost(dane) {
  alert(dane);
  if (dane === "ne") {
    alert(`Morate se usaglasiti`);
    return false;
  }
  return true;
}
function nastavi() {
  if (
    proveriIme === true &&
    proveriPrezime === true &&
    proveriLozinku === true &&
    proveriSaglasnost === true &&
    proveriZemlju === true
  ) {
    alert(`Prosli ste validaciju podataka. Nastavljate dalje!`);
  }
}
