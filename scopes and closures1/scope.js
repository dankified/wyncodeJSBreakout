//There are two types of scope in JavaScript

//Global scope anything that's not declared inside a function belongs to the global scope

var a = 32;

for(var i = 0; i < 5; i++) {}

console.log(i);

//Function scope anything that's declared inside a function belongs to that particular function's scope

function foo() {
    var a = 32;
    console.log(a);
}

function bar() {
    var a = 53;
    console.log(a);
}

