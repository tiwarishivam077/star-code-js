// Decorators and forwarding, call/apply

// JavaScript gives exceptional flexibility when dealing with functions. 
// They can be passed around, used as objects, and now we’ll see how to forward calls between them and decorate them.



// Transparent caching

// Let’s say we have a function Slow(x) which is CPU-heavy, but its results are stable. In other words, for the same x it always returns the same result.
// If the function is called often, we may want to Cache (remember) the results to avoid spending extra-time on recalculations.

// But instead of adding that functionality into slow() we’ll create a wrapper function, that adds caching. As we’ll see, there are many benefits of doing so.
// Here’s the code, and explanations follow:

function slow(x){
    // Suppose complex code is written here, for now we have
    console.log(x);  // simple code
    return x;
}


function cachingDecorator(func){
  let cache = new Map();  // declared a map to store key-value pairs that are already created
 return function(x) {
    if(cache.has(x)){
        return cache.get(x);
    }
    let result = func.call(this, x)
    cache.set(x, result)
    return result;
  }
}

//  The above function is a decorator function, which accepts a function and changes the behaviour of the recieved function on which it is applied.

// let return_value = null

// let new_function = cachingDecorator(slow)
// console.log(new_function(10), 'new_function');
// new_function(10)
// new_function(11)
// new_function(12)
// new_function(11)
// new_function(12)



// In the code above cachingDecorator is a decorator: a special function that takes another function and alters its behavior.
// The idea is that we can call cachingDecorator for any function, and it will return the caching wrapper. 
// That’s great, because we can have many functions that could use such a feature, and all we need to do is to apply cachingDecorator to them.
// By separating caching from the main function code we also keep the main code simpler.
// The result of cachingDecorator(func) is a “wrapper”: function(x) that “wraps” the call of func(x) into caching logic:



// Using “func.call” for the context
// The caching decorator mentioned above is not suited to work with object methods.
// For instance, in the code below worker.slow() stops working after the decoration:

// we'll make worker.slow caching
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    console.log("Called with " + x);
    return x * this.someMethod();
  }
};

console.log(worker.slow(1) ,  'before decorator')

worker.slow = cachingDecorator(worker.slow)
console.log(worker.slow, 'decorater attached');

console.log(worker.slow(1), 'after decorator')  // this line throws error because ==> TypeError: this.someMethod is not a function, no reference is found to this.someMethod 
// So, the wrapper passes the call to the original method, but without the context this. Hence the error.
// While returning wrapper function from decorator, remember that regular function have their own this context which can be set dynamically .call(this, x), 
// this is not the case with arrow function. here this context is lexically bound to the context in which the cachingDecorator function was defined,

// There’s a special built-in function method func.call(context, …args) that allows to call a function explicitly setting this. func.call(context, ...args) sets the context for this.
// context as argument accepts the object to which a method belongs to
// func.call(context, arg1, arg2, ...) is the syntax


function sayHi() {
  console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// use call to pass different objects as "this"
sayHi.call( user ); // John
sayHi.call( admin ); // Admin  here user, admin object are sent as context for the this keyword used in sayHi() func


// To improve our wrapper funtion  we can use call in the wrapper to pass the context to the original function: for e.g, 

 worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

//  
// 
// worker.slow = cachingDecorator(worker.slow); // now make it caching

// console.log( worker.slow(2) ); // works
// console.log( worker.slow(2) ); 


// Now everything is fine.
// To make it all clear, let’s see more deeply how this is passed along:
// After the decoration worker.slow is now the wrapper function (x) { ... }.
// So when worker.slow(2) is executed, the wrapper gets 2 as an argument and this=worker (it’s the object before dot).
// Inside the wrapper, assuming the result is not yet cached, 
// func.call(this, x) passes the current this (=worker) and the current argument (=2) to the original method.


// Previously, for a single argument x we could just cache.set(x, result) to save the result and cache.get(x) to retrieve it. 
// But now we need to remember the result for a combination of arguments (min,max). The native Map takes single value only as the key.

// Join two values into one. In our particular case we can just use a string "min,max" as the Map key. 
// For flexibility, we can allow to provide a hashing function for the decorator, that knows how to make one value from many.

// Here’s a more powerful cachingDecorator:

 worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function hash(args) {
  console.log([].join.call(args));
  return [].join.call(args)
}

// const hash =(arguments)=>{
//    return [].join(...arguments)
// }

function cachingDecoratornew(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}



// The trick is called method borrowing.
// We take (borrow) a join method from a regular array ([].join) and use [].join.call to run it in the context of arguments.

worker.slow = cachingDecoratornew(worker.slow, hash);

console.log( worker.slow(3, 5) ); // works
console.log( "Again " + worker.slow(3, 5) ); // same (cached)
console.log( "New " + worker.slow(5, 5)); // same (cached)


// func.apply

// Instead of func.call(this, ...arguments) we could use func.apply(this, arguments).
// The syntax of built-in method func.apply is:

// func.apply(context, args)


// It runs the func setting this=context and using an array-like object args as the list of arguments.
// The only syntax difference between call and apply is that call expects a list of arguments, while apply takes an array-like object with them.
// So these two calls are almost equivalent:

// func.call(context, ...args);
// func.apply(context, args);


// Summary
// Decorator is a wrapper around a function that alters its behavior. The main job is still carried out by the function.
// Decorators can be seen as “features” or “aspects” that can be added to a function. We can add one or add many. And all this without changing its code!
// To implement cachingDecorator, we studied methods:

// func.call(context, arg1, arg2…) – calls func with given context and arguments.
// func.apply(context, args) – calls func passing context as this and array-like args into a list of arguments.

// The generic call forwarding is usually done with apply:
// let wrapper = function() {
//   // this line in case of no caching
//   return original.apply(this, arguments);
// };

