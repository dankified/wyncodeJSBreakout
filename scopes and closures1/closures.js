//Closures: The ability of a function to reference its lexical scope even when it's not called from said scope.


function foo() {
  var a = 32;

  return function bar() {
    console.log(a);
  };
}

var baz = foo();
// function bar() {
//   console.log(a);
// };

var a = 42;
baz();
console.log(a);