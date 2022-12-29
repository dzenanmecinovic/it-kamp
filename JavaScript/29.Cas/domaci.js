// root Napraviti funkciju koja racuna razliku u danima izmedju dva sledeca datuma:
// "1999-05-24" i "2004-09-15"
// dan === ms
function date(prvi, drugi) {
  return Math.abs((Date.parse(prvi) - Date.parse(drugi)) / 86400000);
}

console.log(date("2004 Septembar 15", "99 May 24"));
console.log(date("99 May 24", "2004 Septembar 15"));
