'use strict';
// Object Properties //

// BRACKET NOTATION
var cat = {
  name: 'Fluffy',
  color: 'White'
};

cat['Eye Color'] = 'Green';

display(cat['color']);
display(cat['Eye Color']);


// Property Descriptor
var cat = {
  name: 'Fluffy',
  color: 'White'
};
display(Object.getOwnPropertyDescriptor(cat, 'name'));


// Writable Attribute
var cat = {
  name: {first: 'Fluffy', last: 'Ploppy'},
  color: 'White'
};

Object.defineProperty(cat, 'name', {writable: false});
Object.freeze(cat.name); // can't change the name object
cat.name = 'Scratchy';
display(Object.getOwnPropertyDescriptor(cat, 'name'));
cat.name.first = 'Scratchy';
display(cat.name);

// Enumerable
var cat = {
  name: {first: 'Fluffy', last: 'Ploppy'},
  color: 'White'
};

Object.defineProperty(cat, 'name', {enumerable: false});

// // for ... in
for(var propertyName in cat) {
  display(propertyName);
  display(cat[propertyName]);
}

display(Object.keys(cat));
display(JSON.stringify(cat)); // serialize object

// Configurable
var cat = {
  name: {first: 'Fluffy', last: 'Ploppy'},
  color: 'White'
};

Object.defineProperty(cat, 'name', {configurable: false});
Object.defineProperty(cat, 'name', {writable: false}); // can redefine property
Object.defineProperty(cat, 'name', {enumerable: false}); // cannot redefine property
Object.defineProperty(cat, 'name', {configurable: true}); // cannot redefine property

delete cat.name; // can't delete the non-configurable property

display(cat);

// Getters and Setters
var cat = {
  name: {first: 'Fluffy', last: 'Ploppy'},
  color: 'White'
};


Object.defineProperty(cat, 'fullName', {
  get : function() {
    return this.name.first + ' ' + this.name.last;
  },
  set: function(value){
    var nameParts = value.split(' ');
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  }
});

cat.fullName = 'Muffin Top';
display(cat.fullName);
display(cat.name);




