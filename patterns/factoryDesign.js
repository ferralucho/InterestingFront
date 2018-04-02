// class
class ClassCar {
    drive () {
      console.log('Vroom!');
    }
  }
  
  const car1 = new ClassCar();
  console.log(car1.drive());
  
  
  // constructor
  function ConstructorCar () {}
  
  ConstructorCar.prototype.drive = function () {
    console.log('Vroom!');
  };
  
  const car2 = new ConstructorCar();
  console.log(car2.drive());
  
  
  // factory
  const proto = {
    drive () {
      console.log('Vroom!');
    }
  };
  
  function factoryCar () {
    return Object.create(proto);
  }
  
  const car3 = factoryCar();
  console.log(car3.drive());

  /*
  `instanceof` does not do type checking the way that you expect similar checks to do in strongly typed languages. Instead, it does an identity check comparing the object’s `[[Prototype]]` object to the `Constructor.prototype` property.

It won’t work across execution contexts, for example (a common source of bugs, frustration, and unnecessary limitations). It also doesn’t work if your `Constructor.prototype` gets replaced.
Benefits of Using Factories

Factories are much more flexible than either constructor functions or classes, and they don’t lead people down the wrong path by tempting them with the `extends` keyword and deep inheritance hierarchies. You can inherit from factory functions using a variety of techniques. In particular, check out the Stamp Specification for composable factory functions.
1. Return any arbitrary object and use any arbitrary prototype

For example, you can easily create various types of objects which implement the same API, e.g., a media player that can instantiate players for multiple types of video content which use different APIs under the hood, or an event library which can emit DOM events or web socket events.

Factories can also instantiate objects across execution contexts, take advantage of object pools, and allow for more flexible prototypal inheritance models.
2. No refactoring worries

You’d never have a need to convert from a factory to a constructor, so refactoring will never be an issue.
3. No `new`

No ambiguity about using `new`. Don’t. (It will make `this` behave badly, see next point).
4. Standard `this` behavior

`this` behaves as it normally would, so you can use it to access the parent object. For example, inside `player.create()`, `this` refers to player, just like any other method invocation would. `call()` and `apply()` also reassign `this` as expected.
5. No deceptive `instanceof`
6. Some people like the way `myFoo = createFoo()` reads

Drawbacks of Factories

    Doesn’t create a link from the instance to `Factory.prototype` — but this is actually a good thing because you won’t get a deceptive `instanceof`. Instead, `instanceof` will always fail. See benefits.
    `this` doesn’t refer to the new object inside the factory. See benefits.
    It may perform slower than a constructor function in micro-optimization benchmarks. Be sure to test in the context of your app if this is a concern for you.
  */

