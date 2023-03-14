// Funkcija za prikupljanje podataka sa servera

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));
// //   .finally(() => setTimeout(getUsers, 1000 * 60 * 5)); // 5 minutes

// getUsers();

// Asinhrona funkcija za prikupljanje podataka sa servera
// const getUsers = async (id) => {
//   const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const users = await data.json();
//   console.log(users);
// };

// getUsers(5);

// Prikupiti sve usere, a nakon toga vratiti JSON sa svim userima koji su prikazani sa odredjenim svojstvima:

// id, name, username, email(malim slovima), phone, website, company.name, addres sa svojstvima street i suite.

const getUserss = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const users = await data.json();
  const mapUsers = await users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email.toLowerCase(),
      phone: user.phone,
      address: {
        street: user.address.street,
        suite: user.address.suite,
      },
    };
  });
  return mapUsers;
};

console.log(
  getUserss()
    .then((data) => console.log(data))
    .catch((error) => consconsoleole.log(error.message))
);
