# InterestingFront

JavaScript's Data Types

The latest ECMAScript standard defines seven data types:

    A primitive value or data type is data that is not an object and has no methods. All primitives are immutable, meaning they cannot be changed. There are six primitive types:
        Number
        String
        Boolean
        Symbol
        Null
        Undefined
    The seventh data type is Object

	Symbol Data Type

Symbols are new to JavaScript in ECMAScript Edition 6. A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.
Null Data Type

The null data type is an internal type that has only one value: null. This is a primitive value that represents the absence of any object value. A variable that contains null contains no valid number, string, boolean, array, or object. You can erase the contents of a variable (without deleting the variable) by assigning it the null value.

Coercion

In JavaScript, you can perform operations on values of different types without raising an exception. The JavaScript interpreter implicitly converts, or coerces, one of the data types to that of the other, then performs the operation. The rules for coercion of string, number, or boolean values are as follows:

    If you add a number and a string, the number is coerced to a string.
    If you add a boolean and a string, the boolean is coerced to a string.
    If you add a number and a boolean, the boolean is coerced to a number.

	for-in

This loop iterates (in an arbitrary order) over the name of each enumerable property in an object, allowing statements to be executed for each distinct property.

	var actress = {
    firstName: "Julia",
    lastName: "Roberts",
    dateOfBirth: "October 28, 1967",
    nationality: "American",
    firstMovie: "Satisfaction"
};

for (var property in actress) {
    console.log("actress." + property + " = " + actress[property]);
}

for-of

This loop iterates over iterable objects such as an Array, Map, Set, String, TypedArray, arguments object, etc. It essentially iterates over the value of each distinct property in the structure, such as each letter in a word or each element in an array.
function main(input) {
    // Split the words read as input into an array of words
    var array = input.split(new RegExp("[ \n]+"));

    // Print array
    console.log(array);

    // Print each of its elements on a new line
    for (let value of array) {
        console.log(value);
    }
}
let actress = new Map([
    ["firstName", "Julia"],
    ["lastName", "Roberts"],
    ["dateOfBirth", "October 28, 1967"],
    ["nationality", "American"],
    ["firstMovie", "Satisfaction"]
]);

// Print each Key-Value pair in the map
for (let info of actress) {
    console.log(info);
}

// Print each Key and Value as "Key: Value"
console.log();
for (let info of actress) {
    console.log(info[0] + ": " + info[1]);
}

