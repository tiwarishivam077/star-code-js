//  an empty js file is the shortest program
// even the file is empty, the js engine performs a lot of operations
//  if we debug the code in developer's tools, you will find 
// 1) Global Execution Context is formed,
// 2) Global Window object is created,
// 3) This keyword is also setup in global context

// window is an huge object with properties and methods which is created by js engine in global space
// these properties and methods can be accessed in any where in js program
// this keyword is nothing, it points to window object

// for e.g
var a=10
function temp(){
    var b=100;
}
console.log(a)
console.log(window.a)
console.log(this.a)
console.log(b) // reference error