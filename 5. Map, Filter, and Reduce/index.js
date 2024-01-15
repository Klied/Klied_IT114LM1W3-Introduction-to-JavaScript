/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const even = numbers.filter(item => item % 2 === 0);

console.log(even); // [2, 4, 4]


// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here

const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(sum); // 16 

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here

const uppercaseWords = words.map(word => word.toUpperCase());

console.log(uppercaseWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here   

const filteredWords = words.filter(word => word.length > 4);

console.log(filteredWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = words.reduce((accumulator, word) => accumulator + word, '');

console.log(concatenatedString);
// Checkpoint 5.1 Summarize what map, filter, and reduce do

/* Answer:  map() method is used for creating a new array from an existing one, 
 applying a function to each one of the elements of the first array.

 filter() method takes each element in an array and it applies a conditional statement against it.
 If this conditional returns true, the element gets pushed to the output array.
If the condition returns false, the element does not get pushed to the output array.

The reduce() method reduces an array of values down to just one value.
 To get the output value, it runs a reducer function on each element of the array. 
 */