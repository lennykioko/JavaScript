// JavaScript array === Python list
// indexing characteristic in string in JS is just like in python
// updating elements in a array is similar to how we do it in python

let models = ['Range Rover', 'Mercedes Benz'];
console.log(models.length); // =2

// .push() allows us to add items to the end of an array


models.push('Porshe'); // acts like append in python

// Another array method, .pop(), is similar to .push(). This method removes the last item of an array.

models.pop();

// .shift() method to remove the first item from the array.
// Use the .unshift() method to add an item' at the beginning of your array.
// Use .slice(1, 4) (from, upto) to divide the array into several parts

// Variables that are assigned with const cannot be reassigned. However,
// arrays that are declared with const remain mutable, or changeable.
// youcan change the items in the array but you cannot re-assign the varriable name to a new array or another data type