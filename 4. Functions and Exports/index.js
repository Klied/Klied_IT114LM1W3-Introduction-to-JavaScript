// Todo 4.1
// Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Call the 'greet' function with your name as the argument
  greet("Your Name");
  
  // Checkpoint 4.1
  // What is the difference between a function declaration and a function expression?
  // Answer: Function declarations are hoisted, meaning they can be called before they are defined.
  // Function expressions are not hoisted and must be defined before they are called.
  
  // Todo 4.2
  // Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
var calculateArea = function(length, width) {
    return length * width;
  }
  
  // Call the 'calculateArea' function with any length and width as arguments
  var area = calculateArea(5, 10);
  console.log("Area: " + area);
  
  
  // Checkpoint 4.2
  // What is a callback function? Provide an example.
  // Answer: A callback function is a function passed as an argument to another function,
  // which is then invoked inside the outer function. Example:
  // setTimeout(function() {
  //   console.log("Callback function executed after 2000 milliseconds");
  // }, 2000);
  
  // Todo 4.3
 // Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters.
// The function should modify each element in the array using the provided function and return the modified array.
function modifyArray(array, callback) {
    var modifiedArray = [];
    for (var i = 0; i < array.length; i++) {
      modifiedArray.push(callback(array[i]));
    }
    return modifiedArray;
  }
  
  // Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
  var numbers = [1, 2, 3, 4, 5];
  var incrementedNumbers = modifyArray(numbers, function(num) {
    return num + 1;
  });
  console.log("Incremented Numbers: " + incrementedNumbers);
  
  
  // Todo 4.4
  // Import and call the add method from mathUtils.js and display the value of the PI constant
  const mathUtils = require('./mathUtils');
  const sum = mathUtils.add(2, 3);
  console.log("Sum:", sum);
  console.log("PI Constant:", mathUtils.PI);
  
  // Todo 4.5
  // Import and call the isPalindrome method from isPalindrome.js
  const isPalindrome = require('./isPalindrome');
  const result = isPalindrome("level");
  console.log("Is Palindrome:", result);
  
  // Checkpoint 4.3
  // What does the require function and module.exports variable do?
  // Should we use it over the import and export keywords? Why? Research your answer.
  // Answer: 'require' is used in CommonJS to import modules, and 'module.exports' is used to export variables,
  // functions, or objects from a module. In modern JavaScript (ES6+), 'import' and 'export' keywords are preferred
  // for module handling as they are part of the ECMAScript standard.
  