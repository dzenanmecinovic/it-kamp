// Domaci zadatak:
// Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku i N=5, dobija se 'vojku'.

function poslednjihN(recenica, n) {
    let poslednjiKarakteri = recenica.slice(-n)
    return poslednjiKarakteri;
}

console.log(poslednjihN("Pera ima devojku", 5))



let testing = "Recenica za testiranje"
let testing2 = testing.slice(-10)
console.log(testing2);



// after-work
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
  console.log(kombinovani('ab','defffff'));