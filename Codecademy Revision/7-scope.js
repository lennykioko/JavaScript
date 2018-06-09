// Variables defined in the global scope are declared outside of a set of curly braces {},
// referred to as a block, and are thus available throughout a program.
// generally, we should avoid declaring variables in the global scope

// A block refers to the {} braces of a function, a loop, or an if statement,
// and serves as an important structural marker for our code.
// Block scope means that a variable defined in the block is only accessible within the block.
// when you try to access a block scope variable in the global scope you get undefined

// unlike Python, global variables in JS can be accessed from within the block scope, in python this is not possible.