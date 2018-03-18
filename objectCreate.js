const machine = {
    init: function (task) {
        this.task = task;
        return this;
    },
    makeTask: function () {
        console.log(this.task);
    }
}

const ex1 = Object.create(machine);
ex1.init("Task 1");
ex1.makeTask();

const ex2 = Object.create(machine);
ex2.task = "Task 2";
ex2.makeTask();

const ex3 = Object.create(machine).init("Task 3");
ex3.makeTask();

console.log('Is ex1 a machine?', machine.isPrototypeOf(ex1));

//object create does this: 
function objectCreate(proto) {
    const obj = {};
    Object.setPrototypeOf(obj, proto);
    return obj;
}

let dog = {
    sound = 'woof',
    talk: function () {
        console.log(this.sound);
    }
}

let button = document.getElementById('myButton');
button.addEventListener('click', dog.talk.bind(dog))

let circle = {
    radius: 5,
    create: function (radius) {
        let circle = Object.create(this);
        circle.radius = radius;
        return circle;
    },
    area: function () {
        let radius = this.radius;
        return Math.PI * radius * radius;
    },
    circumference: function () {
        return 2 * Math.PI * this.radius;
    }
};

let circle2 = circle.create(10);

//Prototypal Inheritance in JavaScript
//constructor
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.area = function () {
    var radius = this.radius;
    return Math.PI * radius * radius;
};

Circle.prototype.circumference = function () {
    return 2 * Math.PI * this.radius;
};

var circle = new Circle(5);
var circle2 = new Circle(10);

function newObj(constructor) {
    let obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    //you can do like this also iun es5: Array.prototype.slice.apply(arguments);
    constructor.apply(obj, Array.from(arguments));
    return obj;
}