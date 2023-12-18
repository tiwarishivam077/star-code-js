/* 
Everything in JS happens inside an Execution Context  
 it consist of two components
 1) Memory or Variable Environment
 2)Code or Thread Execution Component

 JS is a synchronous single threaded language i.e js can execute only one command at a time
 and in a specific order ==> line by line

 when we run a javascript program, an execution context is created, 
 it is created in two phases
*/

//lets the code be 
var n=2;
function square(num){
    var ans = num*num;     //1)Memory Component
    return ans;           //2)Code Component
}
var square2= square(n);
var square4=square(4);

// when we run the above code, a global execution context is created, it is like a big box
// it consist of two components => 1)memory component, 2)code component
//  Execution Context is created in two phases
 
// Execution Context Global
// 1) Memory creation phase ==> js allocates memory to  all variables and functions
// in the above case ==> n:undefined, square: {whole code is stored}, square2: undefinded square4:undefined during the first phase
// undefined is special keyword is js, it is like a place holder


// 2)Code Execution Phase ===>  i.e. the second phase
// JS once again runs through whole code line by line and executes it
// in this phase   line 13 is executed,  n = 2 is allocated, 2 replaces undefined
// line from 14 to 17 has nothing to be executed
// goes to line 18 ==> here we invoke a function() hence a brand new execution context is created  ==> again two components and two phases

// Execution Context 2
// 1)Memory creation phase 
    // parameter num is allocated memory i.e.  num: undefined
    // ans is defined memory i.e. ans:undefined 
//2) Code Execution Phase ==> executing each line
    // n is passed to num in func square(num) i.e. num:2  remember num is parameter, n is argument 
    // line 15 will be executed, multiplication happens==> num*num = 2*2 = 4
    // 4 is allocated to ans i.e. ans:4, undefined is replaced by 4 in same memory space
    // now control goes to line 16, ******--return keyword--*****
    // return keyword tells the function that your task is complete, now return the control to the original
    // execution context where the function was invoked.  
    // i.e. return ans return the controll to line 18 ==> square2 
    // now square2 is assigned value  = ans
    // square2 : ans or square2 : 4

 //3) when the whole function is executed, the whole execution-context for that instance of 
    // the function will be deleted.
 
 //4) Now control moves to line 19 i.e. square4
    // as function is invoked, brand new execution-context is created
    // again memory and code component will be created.
    // again num:undefined, ans:undefined
    // num:4, ans:4*4=16 line 15 executed
    // line 16 ==> return ans; control moves to line 19
    //  square4:16, 16 replaces undefined
    // local execution-context deleted
    // global execution-context deleted



    // this management of execution-contexts invoked everytime is done by
    // maintaining a CallStack. 

    //  the CallStack is a stack which always have the Global-Execution-Context at the bottom.
    // for each invocation of any function, a new new execution-context is pushed in the Call-Stack.
    // as one execution-context is completed. it is poped out of the stack.
    // ***************--- Call Stack maintains the order of execution of the execution-contexts ---***************

    // call stacks aka ==> execution-context-stack / control-stack / program-stack / run-time stack / machine-stack