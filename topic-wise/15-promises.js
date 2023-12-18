// Promises are used to handle async operations in JS
// Suppose we are creating amazon

const cart =['shoes', 'pants', 'kuta']

api => createOrder(cart);  // ==> generate orderID  with all details

api => proceedToPayment(orderId); //==> take you to payment gateway

// both the api are asynchronous ==> don't know how much time they will take 
// ==> proceedToPayment depends on createOrder api


// using callbacks==> leads to inversion of control ==> blind trust on createOrder api 
// ==> but what if proceedToPayment never called or may be called twice ==> not reliable

createOrder(cart, function(){
    proceedToPayment(orderId)
})

// how to handle these kind of operations using promises

// what is a promise ==> it  is a empty object {data: undefined}, this data value holds whatever is returned by api createOrder
//  initial undefined returned by an async api call 
// for e.g.  ==> createOder api is returning a promise which we are capturing in a var c/a promise

let promise = createOrder(cart)

// while executing line 26 ==> js will assign an empty object {data: undefined} to var promise
// later when async operation will be completed(2-3 seconds later) => the data value will be populated automatically into promise

// Once we have this data returned from api call into the promise then we can proceed
//i.e. we can attach a calback funciton to this promise i.e. .then() ==> this func is automatically executed once data is available from api

promise.then(function(orderId){
    proceedToPayment(orderId)
});


// how promises are better  ==> earlier  we passed proceedToPayment callbacks func to createOrder api and blindly relying on it
//  ==> but in promise we attach the callback func to a promise object

// there is a huge difference ==> when we pass a function==> createOrder Api would have called the callbak function whenever it wants to,
// we have no control over it
// but in promise ==> createOrder api has a limited role of creating order and fetching data and fill the promise object with OrderId ==>
// the control is with us ==> once the promise is filled with data 
// ==> .then() callback func will automatically be called with 100% guarantee from JS and just once


// a promise can have only three states ==> 1) Pending  2)Fulfilled 3) Rejected ==> i.e. operation failed
// also promise objects are immutable ==>  we can pass the data here and there ==> w/o worrying that someone may mutate the data


// Interview Question

//1) What is a promise ==>  a placeholder which will be filled later with some data after async operation ==> inapt definition

// rather MDN web docs defintion ==> a promise is an object ==> representing the eventual completion ==> of an async operation


// 2) Promise Chaining to avoid callback-hell

createOder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
   return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
   return updateWalletBalance(paymentInfo)
})