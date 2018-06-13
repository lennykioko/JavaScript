// function declaration: function keyword followed by the name of function

// note that these functions are called in the same way
function sayBye() {
    console.log("Goodbye");
}

// function expression without ES6: assign the function to a variable declared with var

var sayBye = function() {
    console.log("Goodbye");
}; // marks end of variable

// function expression without ES6: use const

const sayBye = function () {
    console.log("Goodbye");
}; // marks end of variable

// arrow function syntax

const sayBye = () => {
    console.log("Goodbye");
};

// concise body

// if the function tales only one parameter, omit the parenthesis
// if there is only one line in the function block you do not have to return it (it will implicitly be  returned) and
// you do not need to have it a new line, eka in the same line as the function. additionally, you can omit hte curly braces

const sayBye = name => "Goodbye " + name;