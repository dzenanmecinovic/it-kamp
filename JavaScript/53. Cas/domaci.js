class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
  calc() {
    return this.length / Number(this.price.slice(0, -1)) + "€";
  }

  courseSummary() {
    return `Course: ${this.title}, price: ${this.price}, length: ${this.length}`;
  }

  set price(cena) {
    if (cena > 0) {
      this._price = cena + "€";
    } else {
      console.log(`cena ne moze biti negativan`);
    }
  }

  get price() {
    return this._price;
  }
}

const kurs = new Course("NIT", 9, 2000);
console.log(kurs.calc());

const kurs2 = new Course("Udemy", 6, 400);
console.log(kurs2.courseSummary());
console.log(kurs.courseSummary());

class practicalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class theoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }
  publish() {
    console.log(`thereticalCourse print.`);
  }
}

const practical = new practicalCourse("NIT", 70, 1500, 50);
console.log(practical);

const teoretski = new theoreticalCourse();
console.log(teoretski.publish());
