// Revealing Module Pattern
// The main difference is that we write the entire object logic in the private scope of the module and then simply expose the parts we want to be public by returning an anonymous object. We can also change the naming of private members when mapping private members to their corresponding public members.

// we write the entire object logic as private members and
// expose an anonymous object which maps members we wish to reveal
// to their corresponding public members
var namesCollection = (function() {
    // private members
    var objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function removeObject(object) {
        var index = objects.indexOf(object);
        if (index > 0) {
            objects.splice(index, 1);
        }
    }

    function getObjects() {
        return objects.slice();
    }

    // public members
    return {
        addName: addObject,
        removeName: removeObject,
        getNames: getObjects
    };
})();

namesCollection.addName("Bob");
namesCollection.addName("Alice");
namesCollection.addName("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(namesCollection.getNames());
namesCollection.removeName("Alice");
// prints ["Bob", "Franck"]
console.log(namesCollection.getNames());
// The most important thing this pattern provides is a more consistent, more easily digestible module (from the perspective of a reader of the code) in comparison with the classic module pattern. A drawback is that we cannot override public members because the functionality is contained within the private function and the public function is only a pointer to the private function, which contains the actual functionality. The classic module pattern doesn’t have this problem, as it exposes the function itself, not a pointer to a function.