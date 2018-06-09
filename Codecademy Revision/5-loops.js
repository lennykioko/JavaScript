let cars = ["Range", "Benz", "Hammer"];

for (let carIndex = 0; carIndex < cars.length; carIndex++) {
  console.log(cars[carIndex]);
}

// The start condition = let carIndex = 0.
// The stop condition = carIndex < cars.length
// The iterator = carIndex++
// Finally, the code block is inside of the { and } curly braces.

// we can run a for loop inside another for loop to compare the items in two arrays.
// Every time the outer for loop runs once, the inner for loop will run completely. == nested for loops

for (let myNum = 0; myNum < myArray.length; myNum++) {
    for (let hisNum = 0; hisNum < yourArray.length; hisNum++) {
      //Code To Run
     }
   }

   while (condition) { // while loops are used when you are unsure of how many times your program should loop
    // Code block that loops until condition is false
  }