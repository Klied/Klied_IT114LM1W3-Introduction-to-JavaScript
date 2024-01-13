/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
// Assume randomNumber is a variable containing a random number


if (randomNumber > 50) {
  console.log("more than fifty");
}
else (randomNumber < 50); {
    console.log("less than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
// Function to generate a random number
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generate a random number between 1 and 100
  const randomnumber = generateRandomNumber(1, 100);
  
  // Check if the random number is odd or even
  if (randomNumber % 2 == 0) {
    console.log(`${randomnumber} is an even number.`);
  } else {
    console.log(`${randomnumber} is an odd number.`);
  }
  

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
// Function to check FizzBuzz
function fizzBuzz(randomNumber) {
    if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
      return "FizzBuzz";
    } else if (randomNumber % 3 === 0) {
      return "Fizz";
    } else if (randomNumber % 5 === 0) {
      return "Buzz";
    } else {
      return randomNumber;
    }
  }
  
  // Generate a random number between 1 and 100 (inclusive)
  
  
  // Check and display the result for the random number
  const result = fizzBuzz(randomNumber);
  console.log(result);
  
let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
console.log("toDisplay", toDisplay);
const randomnmber = /* your code to generate a random number */

toDisplay = randomnmber % 2 === 0 ? "Even" : "Odd";

console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: The switch statement executes a block of code depending on different cases. 
// The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different 
// actions based on different conditions. Use switch to select one of many blocks of code to be executed.

// TODO 2.5 Use a for loop to print the numbers 1 to N
// const n = 10
// Your code here
const n = 10;

for (let i = 1; i <= n; i++) {
  console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
const r = 9
while (r < 11) {
    r++;
  }
  
  console.log(list);
// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: that a do-while loop guarantees the execution of the loop body at least once, while a while loop may skip the execution of the 
// loop body if the condition is false from the beginning. do-while loops are useful when you want to
// ensure that a certain block of code is executed before checking the loop condition.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("Using for-of loop:");
for (const value of list) {
  console.log(value);
}
// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
console.log("\nUsing for-in loop:");
for (const index in list) {
  console.log(myList[index]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach((value) => {
    console.log(value);
  });
// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: Use the for of loop when you want to iterate over the values of an iterable object, such as an array or a string. It provides a concise and straightforward way to loop through the elements of the iterable.
// Use the for in loop when you want to iterate over the properties of an object. It is useful for enumerating the keys or property names of an object.
// Use the .forEach loop when you want to iterate over the elements of an array and perform a specific action on each element. It provides a convenient way to execute a callback function for each element in the array.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
try {
    const numerator = Math.floor((Math.random() * 100) + 1);
    const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing
}


catch {
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }
}




