// Write a JavaScript program to display the current day and time in the following format.
// Current time is: 10 PM : 30 : 38

// function vreme() {}

// console.log(vreme());

function domaci() {
  const trenutnoVreme = new Date();
  return `Trenutno vreme je: ${trenutnoVreme.getHours()} PM : ${trenutnoVreme.getMinutes()} : ${trenutnoVreme.getSeconds()}`;
}

console.log(domaci());

// Write a JavaScript program to find 1st january is being a Sunday between 2014 and 2050.

function nedelja() {
  for (let year = 2014; year <= 2050; year++) {
    const date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      console.log(`January 1st, ${year} is a Sunday`);
      break;
    }
  }
}
nedelja();
