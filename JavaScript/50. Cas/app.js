const zbir = (a, b) => {
  console.log(a + b);
};

const num = 55;
// JS moduli nam dozvoljavaju da podelimo nas kod u odvojene fajlove
// Oni se oslanjaju na dve naredbe(statements):
// import
// export

// Postoje dva nacina eksportovanja neke funkcije, promenljive:
// 1. export default
// 2. export

export default zbir;
export { num };

// https://javascript.info/import-export
