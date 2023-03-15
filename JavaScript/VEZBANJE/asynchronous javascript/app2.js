const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
); // array (3)   ==>   [resolve[1], resolve[2], resolve[3]]

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => console.log(message)
); // Vraca onaj koji se prvi zavrsi. U ovom slucaju ==> 'Video 1 Recorded'
