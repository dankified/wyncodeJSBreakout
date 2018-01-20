//This is not self!

//Everytime a method is called a "this" object is created

//There are a number of ways in which "this" gets bound

//1-Default binding
// function foo() {
//   console.log(this);
// }
// foo();

//2-Implicit binding
// var obj = {
//   foo: function foo() {
//     console.log(this);
//   }
// };
// obj.foo();

//3-explicit binding
// var obj = {
//   a: 42,
//   foo: function foo() {
//     console.log(this);
//   }
// };

// var bar = {
//   a: 32
// };

// obj.foo.call(bar);

//4-hard binding
function foo() {
  console.log(this);
}

var bar = {
    a: 32
}

var baz = {
    a: 42
}

foo = foo.bind(bar);

foo.call(baz);

//5- new binding

//We'll talk more about this when we get to the new keyword