/* though you may see similarities between class and object syntax,
there is one important method that sets them apart. It's called the constructor method.
JavaScript calls the constructor() method every time it creates a new instance of a class
*/
class Dog {
    constructor(name) { // behaves like __init__
      this.name = name;
      // Inside of the constructor() method, we use the this keyword. In the context of a class,
     //  this refers to an instance of that class
      this.behavior = 0; // this behaves like self.
    }
  }

// By convention, we capitalize and CamelCase class names.
// JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.

/*
An instance is an object that contains the property names and methods of a class,
but with unique property values
*/

const halley = new Dog('Halley'); // Create a new Dog instance
// The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
console.log(halley.name);

// Class method and getter syntax is the same as it is for objects except you can not include commas
// between methods.


class Dog {
    constructor(name) {
    // we prepended our property names with underscores to indicate these properties should not be accessed directly. 
      this._name = name;
      this._behavior = 0;
    } 
  
    get name() {
      return this._name;
    } // Between each of our methods, we did not include commas.(commas are in objects but not in classes)
  
    get behavior() {
      return this._behavior;
    }
  
    incrementBehavior() { // a method
      this._behavior++;
    }
  }

/*
The syntax for calling methods and getters on an instance is the same as calling them on an object
— append the instance with a period, then the property or method name.
For methods, you must also include opening and closing parentheses.
*/
let nikko = new Dog('Nikko'); // Create dog named Nikko
console.log(nikko.name);
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior

/*
With inheritance, you can create a parent class (also known as a superclass) with properties and methods
that multiple child classes (also known as subclasses) share.
The child classes inherit the properties and methods from their parent class.
*/

class Cat extends Animal {
    constructor(name, usesLitter) {
      super(name);
      this._usesLitter = usesLitter;
    }
  }

// The extends keyword makes the methods of the animal class available inside the cat class.
/*The super keyword calls the constructor of the parent class.
In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class.
When the Animal constructor runs, it sets this._name = name; for new Cat instances.

_usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.

 constructor(), you must always call the super method before you can use the this keyword
 — if you do not, JavaScript will throw a reference error

In addition to the inherited features, child classes can contain their own properties, getters, setters,
and methods.
The syntax for creating getters, setters, and methods is the same as it is in any other class.
*/


/*Sometimes you will want a class to have methods that aren't available in individual instances,
but that you can call directly from the class.
Take the Date class, for example — you can both create Date instances to represent whatever date you want,
and call static methods, like Date.now() which returns the current date, directly from the class.
The .now() method is static, so you can call it directly from the class, but not from an instance of the class.
Let's see how to use the static keyword to create a static method */

class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    static generateName() {
      const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
      const randomNumber = Math.floor(Math.random()*5);
      return names[randomNumber];
    }
  }

/* Because of the static keyword, we can only access .generateName() by appending it to the Animal class.

console.log(Animal.generateName()); // returns a name
You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses
*/
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError

// Classes are templates for objects.
// Static methods are called on the class, but not on instances of the class.