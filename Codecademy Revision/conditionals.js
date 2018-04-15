/*
All variables that have been created and set are truthy
(and will evaluate to true if they are the condition of a control flow statement)
unless they contain one of the seven values listed below:

false
0 and -0
"" and '' (empty strings)
null
undefined
NaN (Not a Number)
document.all (something you will rarely encounter)

*/

let isPhoneCharged = true; 
if (!isPhoneCharged) { // ! behaves like Not
  console.log('Plug in your phone!');
} else {
  console.log('No need to charge!');
}

/*
To check if two things equal each other === (three = signs in a row).
To check if two things do not equal each other !== (an exclamation with two = signs in a row).
To assign a value to a variable = (one equal sign).
*/

let stopLight = 'green';

if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') { // JS uses else if
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

// logical operators.
// To say "both must be true," we use &&.
// To say "either can be true," we use ||.
if (stopLight === 'green' && pedestrians === false) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }
/* 
To deal with times when you need many else if conditions, we can turn to a switch statement to write more
concise and readable code.
To a computer, a switch statement and an if/else statement are the same,
but a switch statement can be easier for other humans to read.
*/

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break; // prevent further execution of code once the condition has bee n met
  case 'papaya':
    console.log('Papayas are $1.29');
    break; 
  default: // behave s like an else
    console.log('Invalid item');
    break;
}

// The switch keyword initiates the statement and is followed by ( ... ), which contains the condition that each case will compare to. In the example, the condition is groceryItem.

// JavaScript also provides a way to shorten simple if/else statements called the ternary operator.

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
/* 
isNightTime ? — the conditional statement followed by a question mark. This checks if isNightTime is truthy.
console.log ('Turn on the lights!') — this code will be executed if the condition is truthy.
: — a colon separates the two different blocks of code that can be executed.
console.log('Turn off the lights!'); — this code will be executed if the condition is falsy
*/
