// not really relevant in ES6 but just know it for general knowledge
// let sort of does this in the background for you already in ES6

function makeCounter(noun) {
    var count = 0;
    return function() {
        count++;
        console.log(`There are now  ${count} ${noun}`);
    }
}

var dogcounter = makeCounter("dogs");
dogcounter();