//  Anonymous Function  ?

// First Class Functions  ?


// Function Statement vs Function Expression vs Function Declaration  ?

//  Function Statement 
function a(){
    console.log('a called')   // when we use function keyword and give a name to it  ==>> Function Statement
}


// Function Expression
var b = function(){
    console.log('b called')    //Function Expression , when a function is assigned to a variable
}                             // Function acts like a value which you are initializing in var b


// Difference b/w  Function Statement and Function Expression ??
//  answer is Hoisting   if we call both functions a() and b() before their declaration

// for e.g.   

x()    // ===> consoles ==> x callled
// y()    // ===> consoles ==> typeerror, y is not a function

//  the difference in the behavior can be understood if we dive deep into hoisting
// during memorization phase ===> x is function statement ==> it is mapped to the function code
    //  while y is function expression ==> during memorization phase,  y is like a variable ===> value assigned to it is undefined
    // hence x could be executed very easily but y couldn't.

function x(){
    console.log(' x called')
}

var y =function (){
    console.log('y called')
}


//Remeber ==>  Function Declaration aka Function Statement are nothing but same things


// what are Anonymous Functions   ===> *** anonymous functions are used in a place where func are used as values  for e.g ==> var y is  assigned a func definition  (value)  ***

// function(){   // this a function statement ==> w/o any name  ==> it gives syntax error(invalid syntax)
//   console.log('hi)           //==> a function statement should always have a name // one cannnot create anonymous functions like this
// }
               


//  ===> What are Named Function Expression ? answer ==>  when you give any name to a function expression  c/a Named Function expression
var z = function xyz(){
    console.log('Named Function Expression called')
}

z()   // behaves as expected but if we call xyz() then it throws reference error ==> as it is not present in outer scope

//  xyz(), this function can be accessed inside the named function expression i.e. the local scope



//What are  First Class Functions ??  ===>> we can pass functions as arguments inside some other function

// for e.g temp is a func which expects a param c/a param1

function temp(param1){
 console.log(param1)
}

temp(function(){
    console.log('anonympus function is passed inside function temp')  // inside temp func we have passed a anonymous function, it works
})


//  A function can also be used to return another function for e.g. temp1 is a function which returns the function ==> returnThisFunction

function temp1(){
    return function returnThisFunction(){
        console.log(10)
        return 'function returned';
    }
}

let func = temp1()
console.log(func)   // checkout this console.log value

// so what are first class functions..? the abiltiy  of the functions to be passed as arguments/values inside another functions and the abilty
// of the functions that they can be returned from another function ==> this is c/a first class functions
//  Functions are first class citizens



// Arrow Functions ===> come as part of ES6 including let const