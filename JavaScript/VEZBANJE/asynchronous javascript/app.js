// const apiUrls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/todos",
//   //   "https://jsonplaceholder.typicode.com/comments",
// ];

// function fetchData(url) {
//   return fetch(url).then((response) => response.json());
// }

// async function getAllData(apiUrls) {
//   try {
//     const responses = await Promise.all(apiUrls.map((url) => fetchData(url)));
//     let allData = [].concat(...responses);
//     return allData;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllData(apiUrls)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// getUsers(5);

// Prikupiti sve usere, a nakon toga vratiti JSON sa svim userima koji su prikazani sa odredjenim svojstvima:

// id, name, username, email(malim slovima), phone, website, company.name, addres sa svojstvima street i suite.

// async function getData() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await data.json();
//   const mapa = await users.map((user) => {
//     return {
//       id: user.id,
//       name: user.name,
//       username: user.username,
//       email: user.email.toLowerCase(),
//       phone: user.phone,
//       website: user.website,
//       company: user.company.name,
//       address: {
//         street: user.address.street,
//         suite: user.address.suite,
//       },
//     };
//   });
//   return mapa;
// }

// console.log(
//   getData()
//     .then((element) => console.log(element))
//     .catch((err) => console.log(err))
// );
//////////////////////////////////////////////////////////////////

// const dataDiv = document.getElementById("data");
// const btn = document.getElementById("btn");

async function getWeather(grad) {
  const API_KEY = "1173d85e234523cafb3888e8f7fcb893";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${grad}&appid=${API_KEY}`;

  try {
    const fetched = await fetch(url);
    const data = await fetched.json();
    return {
      grad: data.name,
      temperatura: data.main.temp,
      opis:
        data.weather[0].description < 270
          ? data.weather[0].description
          : "Mnogo hladno",
    };
  } catch (err) {
    console.log(err);
  }
}

console.log(getWeather("Novi Pazar").then((e) => console.log(e)));
