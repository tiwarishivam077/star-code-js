// undefined==> special keyword in js, not present in other languages
// it has a lot to do how js code is executed ==> global execution context
// allocates memory(place-holder) to all variables and function before executing single line of code
// and at this time undefined comes into picture

// not defined is something ===>> variable/func ==> not assigned any memory/placeholder

// for e.g.

let a = 9;
console.log(a)  // in execution context ==> memorization step i.e. before code execution
    // ==> a is undefined, after code is executed for line 10 ==> a is allocated the value 9
console.log(b) // reference error ==> not defined in memory