// Jos jedan nacin pravljenja objekata:

const objectFunctions = {
  incrementScore: function () {
    this.score++;
  },
};

function createUser(firstName, lastName, score) {
  const newUser = Object.create(objectFunctions);
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.score = score;
  return newUser;
}

const tarik = createUser("Tarik", "Ibrovic", 16);
console.log(tarik);

tarik.incrementScore();
console.log(tarik);
