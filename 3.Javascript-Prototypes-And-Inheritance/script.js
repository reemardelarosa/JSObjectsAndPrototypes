'user strict';

// the usual
var arr = ['red', 'blue', 'green'];

var last = arr[arr.length-1];

display(last);

// defineProperty
var arr = ['red', 'blue', 'green'];

Object.defineProperty(arr, 'last', {
  get : function() {
    return arr[arr.length-1];
  }
});

display(arr.last);

var arr2 = ['one', 'two', 'three'];
display(arr2.last); // won't work

// prototype

var arr = ['red', 'blue', 'green'];

Object.defineProperty(Array.prototype, 'last', {
  get: function() {
    return arr[arr.length-1];
  }
});

display(arr.last);

var arr2 = ['one','two','three'];

display(arr2.last); // will work

display(Array)


// What is prototype? //
var func = function() {}
display(func.prototype); // {}

var cat = {name: 'Fluffy'};
display(cat.prototype);

var func2 = function() {return 'prototype'}
display(func2.prototype);
// __proto__

display(cat.__proto__); // Object {}

// define prototype

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var fluffy = new Cat('fluffy', 'white');
var muffin = new Cat('muffin', 'brown');

Cat.prototype.age = 3;

display(Cat.prototype); // Cat {}
display(fluffy.__proto__); // Cat {}
display(muffin.__proto__); // Cat {}
display(Cat.prototype === fluffy.__proto__); // the same instance

// instance vs. prototype

// define prototype

function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 4;

var fluffy = new Cat('fluffy', 'white');
var muffin = new Cat('muffin', 'brown');


display(fluffy.age); // 3
display(fluffy.__proto__.age); // 4
display(muffin.age); // 4

display(fluffy.hasOwnProperty('age')); // false
display(fluffy.__proto__.hasOwnProperty('age')); // true
display(Object.keys(fluffy)); //name, color

fluffy.age = 3;
display(fluffy.hasOwnProperty('age')); // true
display(Object.keys(fluffy)); // name, color, age


// Changing Function's Prototype
function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 4;

var fluffy = new Cat('fluffy', 'white');
var muffin = new Cat('muffin', 'brown');

Cat.prototype = {age:5};

var snow = new Cat('Snow', 'White');

display(fluffy.age); // 4
display(muffin.age); // 4
display(snow.age); // 5
display(Cat.prototype.age) // 5


// Multiple levels of inheritance
function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 4;

var fluffy = new Cat('fluffy', 'white');

display(fluffy.__proto__); // Cat {age:3}
display(fluffy.__proto__.__proto__); // Object {}
display(fluffy.__proto__.__proto__.__proto__); // null

// Prototypal Inheritance

function Animal(voice) {
  this.voice = voice || 'grunt';
}

Animal.prototype.speak = function() {
  // display('grunt');
  display(this.voice);
}

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

// Creating Cat inherits Animal
Cat.prototype = Object.create(Animal.prototype);

var fluffy = new Cat('fluffy', 'white');

fluffy.speak(); // grunt

display(fluffy);
display(fluffy.prototype);


function Dog(name, color) {
  Animal.call(this, 'Awww'); // *basic
  this.name = name;
  this.color = color;
}
Dog.prototype = Object.create(Animal.prototype); // *basic
Dog. prototype.constructor = Dog; // *basic
var doggy = new Dog('doggie', 'white');

doggy.speak();

display(doggy);
display(doggy instanceof Dog); // true
display(doggy instanceof Animal); // true

display(doggy.__proto__); // Dog
display(doggy.__proto__.__proto__); // Animal
display(doggy.__proto__.__proto__.__proto__); // Object
display(doggy.__proto__.__proto__.__proto__.__proto__); // null

// Creating Prototypes with Class  //

class Animal {
  constructor(voice) {
    this.voice = voice || 'grunt';
  }
  
  speak() {
    display(this.voice);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super('Meow');
    this.name = name;
    this.color = color;
  }
}

var fluffy = new Cat('Fluffy', 'White');

fluffy.speak();

display(fluffy);
display(fluffy.constructor);
display(Object.keys(fluffy.__proto__))
display(Object.keys(fluffy.__proto__.__proto__)); // array
display(fluffy.__proto__.__proto__.hasOwnProperty('speak')); // true

