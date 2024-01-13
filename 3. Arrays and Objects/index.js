/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

console.log("First Item:", alert(numbers[0]));
console.log("Fifth Item:", alert(numbers[4]));
console.log("Last Item:", alert(numbers[numbers.length - 1]));

// Todo 3.2 calculate the min, max, and the average of the numbers array
const min = Math.min(...numbers);
const max = Math.max(...numbers);
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log("Min:", min);
console.log("Max:", max);
console.log("Average:", average);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Lists in Python and arrays in JavaScript are similar in many ways. Both are ordered collections that can store multiple values. However, there are some differences, such as syntax and built-in methods. Python lists offer more flexibility in terms of data types, and they can hold mixed data types, while JavaScript arrays are more rigid.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
const it114lObject = {
  courseCode: "IT114L",
  name: "Web Systems and Technologies",
  units: 3,
  numberOfStudents: 38,
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
it114lObject.professorName = "Job Lipat";
console.log("Professor Name:", it114lObject.professorName);

// Todo 3.5 Declare an array of objects with information about the courses you are taking this term
const coursesArray = [
  { courseCode: "IT114L", units: 3 },
  { courseCode: "CS107", units: 2 },
  { courseCode: "CS107L", units: 1 },
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
const totalUnits = coursesArray.reduce((acc, course) => acc + course.units, 0);
console.log("Total Units:", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: The equivalent of objects in Python is dictionaries. Both objects in JavaScript and dictionaries in Python are used to store key-value pairs and offer similar functionality. However, there are syntactic differences, and Python dictionaries are more flexible with keys, allowing various data types as keys.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
const copiedArrayWithAdditionalNumber = [...numbers, 100];
console.log("Copied Array with Additional Number:", copiedArrayWithAdditionalNumber);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
const { courseCode: extractedCourseCode, units: extractedUnits } = it114lObject;
console.log("Extracted Course Code:", extractedCourseCode);
console.log("Extracted Units:", extractedUnits);

