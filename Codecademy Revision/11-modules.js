let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;

/*
The pattern we use to export modules is thus:

Define an object to represent the module.
Add data or behavior to the module.
Export the module.
*/

// In order.js we would write:

const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();

// We now have the entire behavior of Menu available in order.js
// require() is a JavaScript function that enables a module to load by passing in the module's filepath as a parameter.

/*
Taking a closer look, the pattern to import a module is:

Import the module
Use the module and its properties within a program.
*/

// We can also wrap any collection of data and functions in an object, and export the
// object using module.exports. In menu.js, we could write:

let Menu = {};

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
};


// module.exports exposes the current module as an object.
// specialty and getSpecialty are properties on the object.
// Then in order.js, we write:

const Menu = require('./menu.js');

console.log(Menu.getSpecialty());
// Here we can still access the behavior in the Menu module.


// As of ES6, JavaScript has implemented a new more readable and flexible syntax for exporting modules.
// These are usually broken down into one of two techniques, default export and named exports.

// The default export syntax works similarly to the module.exports syntax,
// allowing us to export one module per file.

let Menu = {};

export default Menu;

// export default uses the JavaScript export statement to export JavaScript objects, functions, and
// primitive data types.
// When using ES6 syntax, we use export default in place of module.exports.

// ES6 module syntax also introduces the import keyword for importing objects.
// In our order.js example, we import an object like this:

import Menu from './menu'; // no file extension just like in python


// ES6 introduced a second common approach to export modules. In addition to default export,
// named exports allow us to export data through the use of variables.

let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian };

// Notice that, when we use named exports, we are not setting the properties on an object.
// Each export is stored in its own variable.
// specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified.

// To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.

import { specialty, isVegetarian } from './menu';

console.log(specialty);

// If we did not want to import either of these variables, we could omit them from the import statement.
// We can then use these objects as in within our code. For example,
// we would use specialty instead of Menu.specialty.

// Named exports are also distinct in that they can be exported as soon as they are declared,
// by placing the keyword export in front of variable declarations.

export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
};

// We no longer need an export statement at the bottom of our file, since this behavior is handled above.

// To import variables that are declared, we simply use the original syntax that describes the
// variable name. In other words, exporting upon declaration does not have an impact on
// how we import the variables.

import { specialty, isVegetarian } from 'menu';


// Named exports also conveniently offer a way to change the name of variables when we export or
// import them. We can do this with the as keyword.

let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

// To import named export aliases with the as keyword, we add the aliased variable in our import statement.

import { chefsSpecial, isVeg } from './menu';

// Here, note that if we have an option to alias an object that was not previously aliased when exported.
// For example, the isLowSodium object that we exported could be aliased with the as keyword when imported, e.g.

import {isLowSodium as saltFree} from 'Menu';

// Another way of using aliases is to import the entire module as an alias:
// not very practical for me

import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();


// We can also use named exports and default exports together.

let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;

// This would also work if we exported most of the variables as declared and exported others
// with the export default syntax.

export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
}; 
export let isLowSodium = function() {
}; 
let isGlutenFree = function() {
};

export default isGlutenFree;


// While it's better to avoid combining two methods of exporting, it is useful on occasion.
// For example, if you suspect developers may only be interested in importing
// a specific function and won't need to import the entire default export.

// We can import the collection of objects and functions with the same data.
// We can use an import keyword to import both types of variables as such:

import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';

// Modules in JavaScript are reusable pieces of code that can be exported
// from one program and imported for use in another program.