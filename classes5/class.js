class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(this.name);
  }
}

class Developer extends Human {
  constructor(name, age, cohort) {
    //super refers to the constructor of the inherited class "Human"
    super(name, age);
    this.cohort = cohort;
  }
}

var dev = new Developer("Pat", 30, 7);

dev.sayName();
