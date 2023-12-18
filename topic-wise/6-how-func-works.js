//  function works line by line through execution-contexts
//  an execution-context executes through the two phases
//  memorization phase ==> allocating memory for variables and functions
//  code execution phase ===> using that memory space and assigning values to variables, executing code line by line through call stack

//  whenever a new function is invoked ==> a new execution context is created ==> both phases executes,
//  also the brand new execution-context is pushed into  the call stack
//  after func execution is completed, then control goes back to previous execution-context. 
//  Always remember, while consoling data or performing operations==> local execution-context data is utilised