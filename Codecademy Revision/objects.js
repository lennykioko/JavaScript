// JS objects == Python dictionaries

let restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto'],
    openRestaurant: () => {
        return 'Unlock the door, flip the open sign. We are open for business!';
      },
    closeRestaurant() {
        return 'Lock the door, flip the open sign. We are closed.'
      } // how to add methods to objects in ES6 (no colon, no arrow needed)

  }; // end with a semi-colon

// objects can also contain arrays and methods
// When objects have key-function pairs, we call the function a method.

// accessing object properties
objectName.key // = value
objectName['key'] // = value // notice the quotations here

// One advantage that bracket notation has over dot notation is that you can use variables
// inside the brackets to select the keys of an object.
let meal = 'none';
let time = 12;
// We'll use military time for this example, counting hours 0-23.

const restaurantSpecials = {
 breakfast: 'The breakfast special is 20% off freshly squeezed orange juice',
 lunch: 'The lunch special is 10% off appetizers',
 none: 'There are no specials currently'
};

if (time < 11) { // 11 am
  meal = 'breakfast';
} else if (time < 17) { // 5 pm
  meal = 'lunch';
}

console.log(restaurantSpecials[meal]); // here we pass in the variable since we areusing bracket notaton

// Objects are mutable, even if you save an object to a const variable

// We can add appetizers key by writing:
restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta'];

// Since appetizers doesn't exist in the restaurant object, the above will create and add the key-value pairs.
// otherwise it will update the value of the key


const restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
    openRestaurant: function() {
      if (this.hasDineInSpecial) {
        return 'Unlock the door, post the special on the board, then flip the open sign.'
      } else {
        return 'Unlock the door, then flip the open sign.'
      }
    }
  }

// The this keyword refers to the current object, which we use to grab the value saved to hasDineInSpecial.
// this.hasDineInSpecial inside the object is the same as accessing restaurant.hasDineInSpecial outside the object.
// In Javascript, this refers to the object we call it inside.

/*
A common object design paradigm is to include getter and setter methods as attributes.

Getter and setter methods get and set the properties inside of an object.
There are a couple of advantages to using these methods for getting and setting properties directly:

You can check if new data is valid before setting a property.
You can perform an action on the data while you are getting or setting a property.
You can control which properties can be set and retrieved.
*/

let restaurant = {
    _name: 'Italian Bistro',
    _seatingCapacity: 120,
    _hasDineInSpecial: true,
    _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  
    set seatingCapacity(newCapacity) {
        if (typeof newCapacity === 'number') {
          this._seatingCapacity = newCapacity;
        console.log(`${newCapacity} is valid input.`);
      } else {
          console.log(`Change ${newCapacity} to a number.`)
      }
    },
    
    get seatingCapacity() {
        console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
        return this._seatingCapacity;
      }
  }

/*We prepended the property names with underscores (_).
Developers use an underscore before a property name to indicate a property or value should not be modified
directly by other code. We recommend prepending all properties with an underscore,
and creating setters for all attributes you want to access later in your code. */


// Sets the _seatingCapacity value to 150
restaurant.seatingCapacity = 150;
// it changes _seatingCapacity to 150 and logs 150 is a valid input. to the console.

// We call the getter method the same way we would access a property without a method:
restaurant.seatingCapacity;
restaurant['seatingCapacity'];

// this helps us with scope inside of object methods.
// this is a dynamic variable that can change depending on the object that is calling the method.
// Getter and setter methods allow you to process data before accessing or setting property values.