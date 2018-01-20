function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.sayName = function sayName() {
  return this.name;
};

var person = new Human("Pedro", 32);

function Developer(name, age, cohort) {
    Human.call(this,name, age);
    this.cohort = cohort;
}

//Inheritance ES3 style

var f = function() {};
f.prototype = Human.prototype;
Developer.prototype = new f();
Developer.prototype.constructor = Developer;

//

//Inheritance ES5
Developer.prototype = Object.create(Human.prototype);
//

var pat = new Developer("Pat", 30, 7);

console.log(pat.name);
