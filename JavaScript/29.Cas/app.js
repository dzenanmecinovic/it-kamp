// Metode za prikazivanje datuma //

const trenutnoVreme = new Date();
console.log(trenutnoVreme);

// 1. toString()
console.log(trenutnoVreme.toString());

// 2. toUTCString()
console.log(trenutnoVreme.toUTCString());

// 3. toDateString()
console.log(trenutnoVreme.toDateString());

// 4. toISOString()
console.log(trenutnoVreme.toISOString());

// 5. toTimeString()
console.log(trenutnoVreme.toTimeString());

// 6. toLocaleTimeString()
console.log(trenutnoVreme.toLocaleTimeString());

// Get metode:

// Koristimo ih za dobijanje informacija iz Date objekta.

// getFullYear()
console.log(trenutnoVreme.getFullYear());

// getMonth()
console.log(trenutnoVreme.getMonth() + 1);

// getDate()
console.log(trenutnoVreme.getDate());

// getDay()
let nedelja = new Date("2022 Dec 25");
console.log(nedelja.getDay());
console.log(nedelja);

// getHours()
console.log(trenutnoVreme.getHours());

// getMinutes()
console.log(trenutnoVreme.getMinutes());

// getSeconds()
console.log(trenutnoVreme.getSeconds());

// getMiliseconds()
console.log(trenutnoVreme.getMilliseconds());

// getTime()
console.log(trenutnoVreme.getTime());
// Vraca broj milisekundi.

// Set metode:

// Dozvoljavaju menjanje nekih vrednosti koda Date objekta.

// setFullYear()
trenutnoVreme.setFullYear(2015);
console.log(trenutnoVreme);

// setMonth()

// setDate()
trenutnoVreme.setDate(19);
console.log(trenutnoVreme);

// setHours()
trenutnoVreme.setHours(10);
console.log(trenutnoVreme.toTimeString());

// setMinutes()

// setSeconds()

// setMiliseconds()

// setTime()
trenutnoVreme.setTime(1672342138446);
console.log(trenutnoVreme.toString());
