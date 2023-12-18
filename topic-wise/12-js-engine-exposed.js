// JS Runtime Environment is like a big container ==> which contains 
// all the necessary things required to run the JS code
// 1) JS engine i.e heart of the JS runtime environment 
// 2) Web Apis to connect to outer environment 
// 3) Call back queue 4) Microtask queue 5) Event loop 6) etc..
// Browser can execute JS code just because it has JS runtime environement
// Node JS  also has a JS runtime environment, it is a open source javascript runtime  environemnt
// Node JS can run the piece of code outside the browser
// Apis can be different or same in various JS runtime Environment
// Apis can be differnet in case of browser, compare to Node.js and can be same also
//  for.e.g ==> console.log, setTimeout is present in both, but local storage is present in browser only
//  but implementation of these apis may be very different inside different runtime enviroment

// Who created JS..?

// Inside JS engine -->>
//  a lot of js engine are available ==> each browser ==> has its own js engine
// google ==> V8   firefox ==> spidermonkey ==> 1st js engine ever created,  microsoft edge===> chakra

// JS engine architecture
// js engine is not a machine

// a code went through three stages inside js engine
//1) parsing ==> 2) Compilation ==> 3) Execution

// during parsing phase ==>    code is broken down into Tokens 
// syntax parser inside engine converts the code into Abstract Syntax Tree (AST)


// now comes the compilation & execution phase ==> both goes hand in hand

// Just in Time (JIT) Compilation in JS ==> imp concept but first learn about

// Interpretor vs Compiler

// Interpretor executes code line by line w/o knowing what will happen in  next line ==> fast execution
// While  Compiler complies the entire code before executing ==> create a new optimised version of code
// then it is executed very fast ==> more efficient

// JS can be a interpreted language as well as compiled language depends on the engine
// while creation it was a interpreted language as it can not wait to be compiled 
// while running on browser

// while modern JS engines uses both interpretor and compiler both together ==> Just in Time Compilation

// Now both compilation and execution goes hand in hand, job of the compiler is to optimise the code 
// just in run time while interpretor executes the code line by line and also it produces the bite code
// which is executed in the execution phase

// code execution is not possible w/o two components ==> the memory heap and the call-stack
// memory heap is the space where all the variables and the functions are assigned the memory
// Garbage collector ==>  tries to free up memory space whenever possible 
// it uses Mark and Sweep Algorithm very important ==> widely used



// Read about Google JS engine V8 ==> ignition interpreter ==> turbofan compiler 
// ==> Garbage Collector Orinoco read about Mark and Sweep algorithm