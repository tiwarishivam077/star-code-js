// what is a callback function in JS?
// we know functions are first class citizens in JS that means, a function can be passed into
// another function. the function which you pass into another function is known as Callback function
// Callback functions are super powerful in JS, It gives us access to the whole asynchronous world 
//  in a synchronous single-threaded language


// JS is a synchronous and single-threaded language  
//  ==>> i.e. JS can perform only one task at a time and that too in a specific order
// using callback functions we can do async things inside js


// e.g.


function x(y){

}

x(function y(){   // here func y is passed inside  func x ==> y is callback function here
                  // it is c/a callback functn ==> it is passsed inside x, now it can be called at any time &
})               // anywhere in functn x, ==>func y is not called at the moment, i.e responsbility of func y is given to functn x
      // now it is upto x when it wants to invoke func y i.e func y can be called back some time later in the code

// let's now see, how callback functions are used in asynchronous task using setTimeOut function
// since js is a single threaded synchronous language, code will execute one by one , line by line

// SEE line 42 and now read

// first thing==> registering setTimeOut  ==> setTimeOut take this callback function, 
// store it in a seperate space , and set a timer of 5 seconds
// js won't wait for setTimeOut to finish here, it will move-on. JS waits for none
// hence we can say, callback functions give the power of asynchronousity,
 //in setTimeOut what is to be done after 5seconds, we passsed that piece of code as callback func
//  it will be later executed
// now it move to next part of code, i.e. func definition of a,  execute a(), will pass func y()
//  as callback func to a(), code executes in this manner, after 5 seconds expire, setTimeOut
// callback function is executed, check in the browser

// setTimeOut asynchronous operations was not possible w/o these callbacks

setTimeout(function(){
    console.log('timer expired')
}, 5000)  // here some anonymous function is passed as callback function
                               // to setTimeOut function, and timer is set to 5 seconds
                               // the code will be executed after expiry of 5 seconds

function a(b){
    console.log('a')
    b()
}

a(function b(){
   console.log('b')
})


//  Blocking the Main thread
// JS has only one callstack aka main thread, so everything that is executed in the page, 
//  is executed through this call-stack only, so if any operation blocks this call stack, it is c/a
// blocking the main thread. Suppose any func x has very heavy operation 
// ==> takes 20-30 seconds to execute that operation. for those 20-30 seconds, bcoz js has only one
//  callstack, all the other functions will be blocked, we should never block the main thread
//  instead we should use async operations for things which take time



//Deep about Event Listeners
// Closures demo with Event Listeners
function attachEventListener(){
let count =0
document.getElementById('clickMe').addEventListener('click', function xyz(){
    console.log('Button Click', ++count)
})
}
// function xyz() is callback function ==>> handler
attachEventListener()



// Scope Demo with Event Listeners
// watch the video again



// Garbage Collection and removeEventListeners  ==> imp interview question
// why do we need to remove event listeners ==> bcoz they are heavy ==> they take memory 
//  ==> they  form a closure even if the call stack is empty, it does not free up extra memory

//  if there are many event listeners, too much memory occupied ==> page slows down



// Callbacks ==> Pros and Cons

// 1) Call back Hell 
// 2) Inversion of Control


// let's build some ecoomerce thinfs  ==> create order ===> move to payment

const cart =['Shoes', 'Pants', 'Jeans', 'Kurta']

api.createOrder()

api.proceedToPayment()

// proceed to payment can be passed as callback to createOrder api as it proceeds after order creation
// proceedToPayment has dependency on createOrder api so it can be passed as callback to this api function

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        })
    })
})


// now what happened is that we have passed proceedToPayment func to createOrder func, and now it is responsibility of createOrder,
// ===>  async operation

//1) so one callback inside other callback inside other callback inside other api ===> makes a call-back hell ==> it's tough to manage
// this structure is known as Pyramid of Doom


//2) Inversion of controll ==> to loose controll over code ==> by using callbacks
// i.e inorder to call proceedToPayment() func we depend on createOrder() func which might be written by other developer
// may contain bugs, may proceedToPayment func is never called or maybe it is called twice
// so we have lost control because it depends on parent function whether callback is executed properly