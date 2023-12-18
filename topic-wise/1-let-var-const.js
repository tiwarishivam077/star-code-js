//  what is temporal dead zone(TDZ)..?
//  are let and const declarations hoisted...? yes they are but very diffrently from 
//  var declarations, they are in temporal dead zone for the time being
// what's the difference b/w SyntaxError vs ReferenceError vs TypeError..?
// Hoisting means they are assigned some memory as undefined in Script ==> but they cannot be accessed before initialization

let f;
console.log(b) // ==> undefined in console, it means var b can be hoisted

// console.log(a) //Reference Error: Cannot access 'a' before initialization, due to  TDZ
//  how to know whether a is hoisted..? let's look inside browser

let a =10; // not attached to window object ==> global space

// a is also allocated memory before execution of the first line of code
//  but it is not attached to global scope rather attached to script(seperate-memory-space) and 
// it can't be accessed w/o being assigned some value

// same is the case with const declarations

console.log(a)
var b=100;  
 // while b is allocated memory during execution context memorization step ==> undefined in global context



//  example
// console.log(x)  // if we go into developer tools => sources=>debugger 
//   we can observe that x is assigned a value:undefined in script (diffrent memory space)
// it cannot be accessed before initialization bcoz in temporal dead zone ===> not present in global scope/space
// hence reference error

// temporal dead zone is the timezone b/w the let, const variable is hoisted and not initialised to some value
// that is in script memory space, as long as let/const variable are assigned undefined ==> 
// they stay in temporal dead zone
let x = 100
var y=100


// if a is declared again, ===> syntax error is thrown, no code is executed
// let is more strict than var

// let a =100  // SyntaxError: Identifier 'a' has already been declared 
// you can not use same name in the same scope again, be it let, var or const
// for e.g let temp=50, var temp =10 ==> syntax error ==> a already declared


// let's see what happens with const
// const is even more strict that let ==> all similar to let, hoisting and temporal dead zone
// but const is to initialized at the time of declaration

// case1) 
// const constant;  //SyntaxError: Missing initializer in const declaration

// case2)
const val=100;
console.log(val)  
val=1000;  // TypeError: Assignment to constant variable.  const var cannot be reassigned
//  variable val is of type const hence type-error