/*
looping over the contents of an array is common for programmers.
Programmers often accomplish this with a for loop.
However, as is often the case when a task occurs frequently,
JavaScript now provides methods that simplify this task.
These methods, called iterators, are called on arrays and complete such tasks
*/

let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts']; 

groceries.forEach(function(groceryItem) {
  console.log(' - ' + groceryItem);
});

// We can simplify this code using arrow function syntax.
groceries.forEach(groceryItem => console.log(' - ' + groceryItem));

/*
(function(groceryItem) { creates a function that takes a single parameter, groceryItem and opens the
block of code for that function. Because .forEach() is an iterator method, every element
in the groceries array will be passed to this function as an argument in place of groceryItem
*/

/*
There are three important things to know about the .forEach() method.

It is an array method. It must be called upon an array.
Any changes to the iterated array value won't be updated in the original array.
The return value is undefined.
*/

/*
The syntax for .map() is almost the same as the syntax for .forEach()
with one important change. Notice that directly before the function call, the code reads,
let bigNumbers =. This is because .map() returns a new array with elements that have been
modified by the code in its block. bigNumbers is the new array in which the method will save the values.
*/

let numbers = [1, 2, 3, 4, 5]; 
let bigNumbers = numbers.map(numbers => numbers * 10);

// filter here returns a new array with items that meet the filter criteria
let shortWords = words.filter(word => word.length < 6);
//arrow function syntax is quickly becoming the preferred way to write these types of method calls.

// there are many more iterators, check them out in the Js docs from Mozilla Developer Network
// it is key to learn which iterator to use in a given scenario
