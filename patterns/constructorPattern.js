// Constructor Pattern
// Common ways to create objects in JavaScript are the three following ways:

// // either of the following ways can be used to create a new object
// var instance = {};
// // or
// var instance = Object.create(Object.prototype);
// // or
// var instance = new Object();
// After creating an object, there are four ways (since ES3) to add properties to these objects. They are the following:

// the dot notation
instance.key = "A key's value";

// the square brackets notation
instance["key"] = "A key's value";

// setting a single property using Object.defineProperty
Object.defineProperty(instance, "key", {
    value: "A key's value",
    writable: true,
    enumerable: true,
    configurable: true
});

// setting multiple properties using Object.defineProperties
Object.defineProperties(instance, {
    "firstKey": {
        value: "First key's value",
        writable: true
    },
    "secondKey": {
        value: "Second key's value",
        writable: false
    }
});

// we define a constructor for Person objects
function Person(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper || false;

    this.writesCode = function() {
      console.log(this.isDeveloper? "This person does write code" : "This person does not write code");
    }
}

// creates a Person instance with properties name: Bob, age: 38, isDeveloper: true and a method writesCode
var person1 = new Person("Bob", 38, true);
// creates a Person instance with properties name: Alice, age: 32, isDeveloper: false and a method writesCode
var person2 = new Person("Alice", 32);

// prints out: This person does write code
person1.writesCode();
// prints out: this person does not write code
person2.writesCode();
// However, there is still room for improvement here. If you’ll remember, I mentioned previously that JavaScript uses prototype-based inheritance. The problem with the previous approach is that the method writesCode gets redefined for each of the instances of the Person constructor. We can avoid this by setting the method into the function prototype:

// we define a constructor for Person objects
function Person(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper || false;
}

// we extend the function's prototype
Person.prototype.writesCode = function() {
    console.log(this.isDeveloper? "This person does write code" : "This person does not write code");
}

// creates a Person instance with properties name: Bob, age: 38, isDeveloper: true and a method writesCode
var person1 = new Person("Bob", 38, true);
// creates a Person instance with properties name: Alice, age: 32, isDeveloper: false and a method writesCode
var person2 = new Person("Alice", 32);

// prints out: This person does write code
person1.writesCode();
// prints out: this person does not write code
person2.writesCode();
// Now, both instances of the Person constructor can access a shared instance of the writesCode() method.