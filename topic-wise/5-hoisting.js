

// Case 1

var x=7;
function getName(){
    console.log('Namaste Bharat')
}

getName()        // consoled Namaste Bharat
console.log(x)   // consoled 7
console.log(getName) // consoled func definition 

// everything happened as per expectations



// Case 2

console.log(y)    // undefined
sum()           // 5

var y=7
function sum(){
    console.log(2+3)
    return 2+3;
}

//  even though y is consoled before definition, it consoles as undefined
//  the answer lies in memory phase of execution context
// first memory is allocated for var y:undefined and function sum:func-code
// hence when code execution phase starts, y has value undefined, ==> consoles undefined
// when func sum is invoked ==> new execution context created ==> in phase 2 it consoles 5 and 
// control goes back to global execution context ==> line 23 executed ==> y:7


// Case 3

console.log(z)    // undefined ==> as usual
temp()       // reference error, can not access temp before initialization
            // it happens becoz when you define a func as arrow func, in global scope memory, it is
            // assigned as a variable and not as a func. hence in memory phase, it is assigned a value undefined ==> temp:undefined
newFunc()   // same is the case with this func newFunc() as it is also assigned as a variable:undefined inside script memory-phase

// only proper definition of the function is assignd the complete func defition in memrization phase and it allows hoisting

let temp =()=>{
    console.log('arrow function')
}

var newFunc = function add (){
    console.log(10*10)
}
var z = 'hi'


//Definition ==>>
// Hoisting in JS is the phenomenon by which you can access the variables as well as funcs
// even before you have initialised it without error


// suppose line 6 is removed ==> it gives error ==> reference-error ==> x is not defined
// undefined and not defined are two different things



// suppose we console getname()function before the declaration of function getName() func.
// it consoles the entire program, while in case of consoling x, it consoled undefined

// answer lies in how code is executed, i.e. execution-context is created, memory component
//  and code component ==> memory creation phase && code execution phase