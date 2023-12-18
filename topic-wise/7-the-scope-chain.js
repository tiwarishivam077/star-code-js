//  scope in js is directly related to lexical environment
// lexical environment helps in understanding the scope, the scope chain and closures

// let's begin

function a(){
  console.log(b)    // what will be the output ==> 10
}

var b=10;
a()

//  let's ponder...
// can we access var b inside func a ===> what will be the output
// when we invoke func a ==> new execution context created ==> js engine try to find out b 
// in local memory space ==>  so three cases possible
// 1) it prints ==> not defined  reference error ==> b not present in local space
// 2) it prints ==> undefined
// 3) it prints ==> 10 

//  the output is 10;  ==>> it means somehow inside func a , the b inside can access the b outside func

// let's make thing little complex

function x(){
   y()
    function y(){
    console.log(z)
    }
}
var z = 100
x()

//  now we have nested func y() in func x() ==> this func y() can also access var z = 100;
// it means from local scope we can access the global scope var/func
// but local scope  var/ func can not be accessed in global space/scope

// A scope is the space where you can access a specific variable/func in your code

// what is lexical environment..?
// let's us make a program and execute it

function temp(){
    var temp1 =19;
    temp2()
    function temp2(){

    }
    
}

temp()

//  step by step execution
// 1) in call stack, GEC is pushed ==> memory creation ==> temp: func-reference + code execution ==> temp() invoked
// 2) func invoked ==> new local execution context created for func temp and pushed into call stack
//   memory ==> temp1:undefined , code-execution :==> temp1 =19,  temp2() invoked ===> new execution context created for temp2()
// 3) memory: '', code :'' ==> execution completed ==> local exe-contxt 
// whenever a local execution context is created, a lexical environment is also created
// 4) what's lexical enevironemnt ==> lexical === hierarchy, lexical environment is nothing but the memory part of local execution context 
//  and lexical environment of parent execution context
// 5) the memory part of local execution context has a reference to lexical environment of parent execution context 
// 6) Global Execution context is referenced to null as it has no parent


// therefore ==> func temp2 ==> can access the lexical enevironment of its parent temp and parent of temp that is global
// and the chaining of this lexical spaces is called as the scope chaining