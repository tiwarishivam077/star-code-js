'use strict';

console.log(this);

//  this keyword in global space is always tied to global object ==> js runs in various js runtime environments ==> in browser, nodejs, mobiles, smartwatch, etc
// in browser the global objecvt is window ==> in node js global object is global

function print() {
  console.log(this); // undefined in strict mode, however due to (this-substituion) in non-strict mode, it gets substituted by global object
}

print();

//  Inside the function, the value of this keyword is undefined, in the strict mode
//  However in non-strict mode, due to this substitution the this keyword is replaced with global object

//  Value of this keyword also depends on how the this keyword is called. for e.g. in strict mode print() and window.print() gives different output

print(); // undefined
window.print(); // this prints window object in console

// difference b/w method and a function ==> when you create a function inside an object ==> is called as method
// let's create an object : obj

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x(); // if you look at the console ==> you can infer that
// the value of this keyword in the method x() refers to the object  'obj' containing the method x,
// if we console ==> this.a ==> then this refer to the object 'obj' and this.a refer to property 'a'

// call apply bind is used to share methods
// let's experiment

let student1 = {
  name: 'Shivam',
  class: 6,
  print: function (address, age) {
    console.log(this.name, this.class, address, age);
  },
};

student1.print();

let student2 = {
  name: 'Satyam',
  class: 2,
};

student1.print.call(student2, 'Kannauj', 7); // we borrowed the method  print() of object 'student1' and pass the reference of object 'student2'

student1.print.apply(student2, ['kannauj', 10]); // apply method takes array as arguments while call methods accepts individual arguments

//  bind method looks almost similar to call and apply method
// but the difference is that it binds a method to an object and returns a copy of that method for e.g.

let printName = function () {
  console.log(this.firstName, ' ', this.lastName);
};

const student3 = {
  firstName: 'X',
  lastName: 'Y',
};

let consoleName = printName.bind(student3);

consoleName();

//Arrow functions and this keyword ==> arrow func donot have their own this binding associated to them
// ==> the value of this keyword is the value of enclosing lexical context, so if we use printName as an arrow function, it behaves differently

const newObj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
newObj.x(); // ==> value is global object ==> window object
