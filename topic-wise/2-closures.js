// Closures ===>>  function along with it's lexical scope is c/a closure.

//  A closure is a combination of a function bundled together(enclosed) with references to 
// its surrounding state (the lexical environment) i.e. a closure gives you access to 
// another function's scope from an inner function. In JS, closures are created every time
//  a function is created at function creation time.

//  for e.g.

let closures = ' the topic we are studying'

function x(){
    var a=7;
    function y(){
        console.log(a)   // here function y is able to access the value of var a, 
    }                  // from its parent function x i.e.  it's lexical scope
    return y;
}

 var z = x();   //  var z has acquired the value equal to  func y(), if you execute func z(),  
  console.log(z) //  it will behave like executing func y() and func x() is removed from the callstack
 z(); // a very interesting observation here is that now func y() has been returned to z, 
           //  it no longer resides inside func x()
            //    and it contains console.log(a) and most importantly var a is not declared in func y()
             // rather var a is present in func x() which is even not present in callstack.
             // even then if we execute func z() invokes it consoles the value 7. it is c/a closure

//  the learning is when a function is returned from another function, they still maintain
// their lexical scope. they remember where they were actually present  
// i.e. though func x() is not present in callstack still func y() remembers its lexical scope
// func y() remebers its bindings
//  remember that when a function is returned from inside other function, the  entire closure is returned
//  not just the function code. i.e function along with it's lexical scope is returned
//   
//  learn more about lexical scope, lexical binding, Scope Chaining, function inside function,
// asynchronous js


function x1(){
    var a=7;
    function y1(){
        console.log(a) 
    } 
    a=100;                 // a is reassigned the value 100
    return y1;
}
var a =121; // here the lexical scope of var a is different from that present in func x1()
 var z1 = x1();     
   // now when we execute func z1(), it consoles 100 but not 7.
//   it means, y refers to the memory where a is stored, but not the value of a
// it will read the value of a from it's address within it's lexical scope

 z1()




 function closure(){
    var b = 900;
    function child(){
        var c=70;
        function grandChild(){
            console.log(b,c)   
        }    
        grandChild()
    }
     child()
 }
 closure() 
 // here  func grandChild() forms a closure with lexical scope of func child() i.e parent func, as well as lexical scope of func closure() i.e. grand parent

//  Common users of Closures
// 1) Module Design Pattern
// 2) Currying
// 3)Functions like once
// 4) maintaining state in async world
// 5) setTimeuts
// 6) Iterators etc.



/*   setTimeOut and Closure Interview Questions   */

function test(){
    var i=131;
    setTimeout(function (){
        console.log(i, 'other setTimeOut')     // the func inside setTimeout forms a closure wrt var i
    }, 3000);
    console.log('Namaste Bharat')
}
test()     // time & js waits for none
// setTimeOut stores a callback function at some location, and set the given timer 
//  it executes further lines of code, and when the timer expires, the same callback 
// function is inserted into callstack and executed 

// Read more about event loop



// Let's have some task, the task is to print numbers from 1 to 5 after particular time intervals
//  for e.g 1 is printed after 1 sec, 2 is printed after 2 secs, 3 is printed after 3 seconds and so on


// for(var i=1;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);   // var has a function scope   
//     }, i*2000)
// }

// if we look at the above for loop closely, let's analyse what is happening
// for every iteration of i in for loop, setTimeOut has a callback function
//  which consoles the value of i.
// as discussed above, the callback function is stored in each iteration and timer is set
// meanwhile timer expires, the value of i reaches to 6
// then the callback functions are invoked into callstack
// due to closure formed by callback func in setTimeout now i value is consoled.
// since var has function scope, for every iteration in callback function
// the value of i remains 6 and every passing second 6 is printed in console



// for(let i=1;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);     // let has a block scope  
//     }, i*1000)
// }

// let's come to let now it has a block scope
// now for each iteration of i, when callback function is stored with its closure
// the value of i is stored with reference to that particular iteration's i value
//  as let has block scope so associated callback function closure stores 
// different i value for each iteration and when timer expires
// callback functions are invoked back into callstack along with their closures
// hence numbers from 1 to 5 are printed


// using var also same output can be consoled

function temp(){
    for(var i=1;i<=5;i++){
        function print(x){
            setTimeout(()=>{
                console.log(x)
            }, x*1000)

        }
        print(i);
    }
}
temp();