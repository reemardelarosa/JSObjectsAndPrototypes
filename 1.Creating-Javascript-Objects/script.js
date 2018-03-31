'use strict';
// Object Creation //

// OBJECT LITERAL
var cat = {
  name: 'Fluffy',
  color: 'white',
  speak: function() { display('Meeooow') }
};
cat.age = 3;

cat.speak();
display(cat.name);
display(cat.age);

// NEW KEYWORD
function Cat() {
  this.name = "Fluffy";
  this.color = "White";
}

var cat = new Cat();

display(cat);

// Constructor
function Cat(name, color) {
  this.name = name
  this.color = color
}

var cat = new Cat('ree', 'white');

display(cat);

//Object.create
var cat = Object.create(Object.prototype,
  {
    name: {
      value: 'Fluffy',
      enumerable: true,
      writable: true,
      configurable: true
    },
    color: {
      value: 'White',
      enumerable: true,
      writable: true,
      configurable: true
    }
  }
)

display(cat);

// ES6
class Cat {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  
  speak() {
    display('Meeooow');
  }
}
var cat = new Cat('Fluffy', 'White');

display(cat);
cat.speak();

