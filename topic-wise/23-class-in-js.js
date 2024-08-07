// ES6 --> Class and Object

class person {
  // constructor function in class ==> this function is invoked automatically
  // at the moment an object of above class is created
  // it is used to initialize the object, set values to properties

  constructor(n, a) {
    console.log('person created');
    this.name = n;
    this.age = a;
  }

  // method in a class i.e. it is a prototype method  ===> methods get attached to prototype ==> prototype chaining continues
  sayHi() {
    console.log('Ram Ram bhaiya..!');
  }

  // static method or property ==>it is not called through object rather called through class ==> goto line34
  //  this function is not attached to object prototype stays in class
  static sayHello() {
    console.log('Radhe Radhe..!');
  }
}

let Ram = new person('Ram', 28);
let Mohan = new person();

console.log(Ram, Mohan); // blank object

Ram.sayHi();
Mohan.sayHi();

// Ram.sayHello() // ==> throws an error, not a function

person.sayHello(); // works properly, static func ==> executed using class

// How to use inheritance in ES6

class Employee {
  //(Parent Class)

  constructor(n) {
    console.log('Employee Constructor invoked...');
    this.name = n;
  }
  msg() {
    console.log('Khalistani Murdabad'); // inside a class, the method is stored in protoype
  } // in order to stick to dry concept
}

// console.log(Employee, 'Employee 52');

class Manager extends Employee {
  // here manager(Child) class is inheriting class Employee props and methods
  constructor(n, d) {
    super(n); // super func is used to call constructor func of parent(inherited) class
    this.department = d;
  }

  msg() {
    console.log('Child class same function created');
  }
  info() {
    super.msg(); // parent class function called using super keyword
    this.msg(); // function defined in  same class ===> accessed using this keyword
    console.log(this.name + ' ' + this.department);
  }
}

let manager1 = new Manager('Shivam', 'web app');

console.log(manager1, '*********'); // if you see console it reads ==> Employee Constructor invoked...
// we have not created any object of class Employee but Manager, still constructor func of
// class Employee invoked ==> it is bcoz manager class extends employees class

//  if we want to access the msg() method inside class manager ==> we will again use super keyword
// for. e.g.  use ==> super.msg()

manager1.info(); //
class Admin extends Manager {}

let admin = new Admin('Sai', 'DevOps');

console.log(admin, 'admin');

// Public and private Property

class student {
  #girlfriendName = 'Jennie';

  constructor(n, c, d, h) {
    this.name = n;
    this.class_year = c;
    this.discipline = d;
    this.hostel = h;
  }

  getName() {
    console.log(
      this.name +
        ' ' +
        this.class_year +
        ' ' +
        this.discipline +
        ' ' +
        this.hostel
    );
  }

  girlFriend() {
    // now this function has become pvt, can be accessed inside this class only
    console.log(this.#girlfriendName, ' I am the  girlFriend');
  }

  #secret() {
    console.log('Gazab Chootiya Kata tha');
  }

  details() {
    console.log("Lovely Couple, everyone's favourtie,");
    console.log(
      'Rohit mad in Love, Jennie gets sexual favours from other boys too'
    );
    this.#secret();
  }
}

let Rohit = new student('Rohit', '2019', 'CST', 'Barak');

console.log(Rohit); //so all the public properties are consoled in dev tools

// we can access public properties and methods in this manner ==> public properties can directly be
// accessed using object
Rohit.getName();

//  but private properties  can only be accessed inside class and they are defined in the following manner

//  give # tag to the property you want to make private,
// and it is to be defined outside constructor function in the class

//  we have defined a pvt property named girlfreindName. let's try to access it outside class

// console.log(Rohit.#girlfriendName)   // throws an error ==> pvt field must be enclosed inside class

// but we can print girlfriendName by using it inside class only for e.g. let's define a func
//  inside class where this pvt property is used

Rohit.girlFriend(); // ==> see in console ==> gf's name

// Rohit.friend()

Rohit.details();

// Mixing ==> important concept  ==> how to access these methods via an object of some class, note the methods below are defined
//  inside object, not a class==> hence it cannot be extended as usual to that class

let otherUsefulMethods = {
  getReminder(x, y) {
    return x % y;
  },

  getProduct(x, y) {
    return x * y;
  },

  printStars() {
    console.log('* ** *** ***** ');
  },
};

class user {
  constructor(name) {
    this.user = name;
  }
}

let temp = new user('temp');

// console.log(temp.getReminder())   // this line gives an error ==> get reminder is not a function

//  so how to access getReminder inside temp ==> follow this method ==>

// Object.assign(user.prototype, otherUsefulMethods)  //==> these methods are now attached to user object prototype

// console.log(temp)   // see in console, in temp's protype==> otherUsefulMethods are attached

temp.__proto__ = otherUsefulMethods; // method 2
console.log(temp); // same result

// temp.printStars()  // see in console starts are printed
