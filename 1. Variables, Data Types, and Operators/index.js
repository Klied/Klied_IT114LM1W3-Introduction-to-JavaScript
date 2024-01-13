/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here 

var x = 10;

if (x === 12) {
  var x = 20;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let x = 10;

if (x === 10) {
  let x = 20;

  console.log(x+10);
  // Expected output: 30
}

console.log(x);
// Expected output: 10

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
// var is function-scoped, can be reassigned and redeclared, and is hoisted.
// let is block-scoped, can be reassigned but not redeclared, and is not hoisted.
// const is block-scoped, cannot be reassigned or redeclared, and is not hoisted.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
1 / 3; // 0.33333333333
1 / 3 === 1.0 / 3.0; // this is true

// Checkpoint 1.2 What operators did you use?
// Answer: /
// Your code here
12 / 36; // 0.25
((34 + 26)/6); // 10

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log("Hello"+"My World");
// Checkpoint 1.3 What operators did you use?
// Answer: +

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const o1 = true && true; // t && t returns true
const o2 = true && false; // t && f returns false
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = !false; // !f returns true

// Checkpoint 1.4 What operators did you use?
// Answer: &&, ||, !


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const planes = {"A-10", "F22", "F35", "F4", "F15", "F16"};
0 in planes; // returns true
3 in planes; // returns true
6 in planes; // returns false
"ship" in planes; // returns false

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] is falsy and '0' is string , 
// js is not able to coerce them to convert the to type which can be compared . so false is returned .
// Your code here
console.log( [] == '0'); 
