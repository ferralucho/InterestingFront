//Module Pattern

// we  used an immediately invoked function expression
// to create a private variable, counter
var counterIncrementer = (function() {
    var counter = 0;

    return function() {
        return ++counter;
    };
})();

// prints out 1
console.log(counterIncrementer());
// prints out 2
console.log(counterIncrementer());
// prints out 3
console.log(counterIncrementer());
// As you can see, by using the IIFE, we have tied the counter variable to a function which was invoked and closed but can still be accessed by the child function that increments it. Since we cannot access the counter variable from outside of the function expression, we made it private through scoping manipulation.

// Using the closures, we can create objects with private and public parts. These are called modules and are very useful whenever we want to hide certain parts of an object and only expose an interface to the user of the module. Let’s show this in an example:

// through the use of a closure we expose an object
// as a public API which manages the private objects array
var collection = (function() {
    // private members
    var objects = [];

    // public members
    return {
        addObject: function(object) {
            objects.push(object);
        },
        removeObject: function(object) {
            var index = objects.indexOf(object);
            if (index > 0) {
                objects.splice(index, 1);
            }
        },
        getObjects: function() {
            return objects.slice();
        }
    };
})();

collection.addObject("Bob");
collection.addObject("Alice");
collection.addObject("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(collection.getObjects());
collection.removeObject("Alice");
// prints ["Bob", "Franck"]
console.log(collection.getObjects());