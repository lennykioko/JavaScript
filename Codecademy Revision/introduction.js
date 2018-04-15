// Js has no floats: both ints and floats are categorized as numbers
// Booleans — Either true or false
// additional primitve data types - null and undefined (strings, numbers, booleans)

// When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. An instance is an individual case (or object) of a data type.
// JavaScript will save a new piece of data, like 'Hello', as a string instance in the computer's memory. Another example, the number 40.7, is stored as an instance of the number data type.

let name = 'lennykmutua';
console.log(name.length);

console.log('Hello'.toUpperCase()); // 'HELLO'
console.log('Hey'.startsWith('H')); // true

/* multi-line 
comment */ 

// Libraries are collections of methods that can be called without an instance.

// the  standard naming convention in JavaScript is camelCase

const name = 'lenny'; // constant
let age = 19; // can be re-assigned

let r = 4;
r++; // increment by 1

let t = 4;
t--; // decrement by 1

// The JavaScript term for inserting the data saved to a variable into a string is string interpolation.
let career = 'Software Engineer';
let company = 'Andela';
console.log(`I am a ${career} at ${company}.`);

// Unset variables store the primitive data type undefined.
let salary; // undefined
