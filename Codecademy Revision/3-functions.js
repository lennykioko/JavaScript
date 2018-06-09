//  arguments are provided when you call a function, and parameters receive arguments as their value.
const multiplyByThirteen = (inputNumber) => { //parameter
    console.log(inputNumber * 13);
  };
  
  multiplyByThirteen(9); // argument

// A function declaration is a function that is bound to an identifier or name.
  function square (number) {
    return number * number; 
  } // no semi-colon
  
  console.log(square(5));
/*
Function declarations require the keyword function, a name, and a function body.
You can identify this by the use of function square() and the {} below.
Function declarations do not end in a semi-colon.
*/

/*
With a function expression the identifier can be omitted, creating an anonymous function.
Function expressions are often stored in a variable.
You can identify a function expression by the absence of a function name immediately trailing the function keyword.
function expressions end with a semi-colon since they are stored in a variable.
*/

const square = function (number) {
  return number * number;
}; // needs to end with a semi-colon

console.log(square(5));

/*
Arrow function syntax is a shorter syntax for a function expression.
You can identify arrow functions through the use of parentheses and the arrow token () =>.
*/
const square = (number) => {
  return number * number;
}; // since it is a shorter version of a function expression, it ends with a semi-colon

console.log(square(5));

/*
The most condensed form of the function(arrow function) is known as concise body.
Functions that take a single parameter should not use parentheses.
The code will still work, but it's better practice to omit the parentheses around single parameters.
However, if a function takes zero or multiple parameters, parentheses are required.

A function composed of a sole single-line block is automatically returned.
The contents of the block should immediately follow the arrow => and the return keyword can be removed.
This is referred to as implicit return.
A function composed of a sole single-line block does not need brackets.
*/

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
  };

const multiplyByNineFifths = celsius => celsius * (9/5);

// The parentheses around celsius have been removed, since it is a single parameter.
// The return keyword has been removed since the function consists of a single-line block.
// The {} have been removed, again, since the function consists of a single-line block.

// We can use return to return the result of a function which allows us to call functions anywhere,
// even inside other functions.