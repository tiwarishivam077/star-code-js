/*
*
* what is async ?  async is a keyword ==>used before a function ==> to create async functions 
* what is await ?
* how async await works behind the scenes ?
* examples of using async await
* Error Handling
* Interviews
* Async await vs Promises.then/.catch
*
*/




async function getPlainData(){   // this is an async function ==> it always returns a promise
    
    return 'Jai Shree Ram';                   // there are 2 cases ==>  either you return a promise or a value(string, number)
  // in this case a string is returned still it's wrapped in a promise, i.e. this function will automatically wrap the value in promise and return a promise always
}

let dataPromise =getPlainData()
// console.log(dataPromise)   // see on console, a promise is returned, now how to extract data out of promise ==> using .then()

dataPromise.then(data=>{
    // console.log(data)
})


let p = new Promise((resolve, reject) => {
    resolve('I am Promise P , I am Resolved, value:100')  // a simple promise is created
})

async function returnPromise() {
    return p;    // this function is actually returning a promise
} 

dataPromise = returnPromise()

// console.log(dataPromise, 'new promise') // in this case , promise is not again wrapped inside another promise

dataPromise.then((res)=>{
    // console.log(res)
})


//  Using Async and Await together ==> this combo is used to handle promises, but why do we need async await ? 
// how were we handling promises before async await? 

// let see
function getInfo(){
     p.then(res=>console.log(res))   // handling the promise
}

 getInfo()  // promise p will resolve and on console message will be printed

// Now how to handle this thing using async await ?

//await is a keyword which can only be used inside an async function that too infront of a promise and it resolves that promise

async function handlePromise(){
   const val =  await p;      // always use await keyword in front of the promise, here p is promise
// instead of doing p.then use await p,  now the promise p will be resolved
    // and data will be absorbed in const varialbe ==> val
    // this is how we handle promise using async await, val contains the promise resolved value
    console.log(val)
}  

handlePromise()

// Difference b/w normally handling promises( .then(), .catch()) and handling promises with async await and why it is special


const pinkyPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('I am pinky promise, 10 seconds')
    }, 10000)
})

// Using await keyword ==> js waits for the promise to resolve first ==> then only next line is executed
//  ==> that's the key difference from .then()

async function handleNewPromise(){
 const val = await pinkyPromise;
 console.log(val)
 console.log('Namaste Javascript', ' 81')
}

  handleNewPromise()

// Using .then() and .catch() while handling process, js doesnot wait to execute next line
//  ==> func attached to .then is executed at later point of time but ==> lines below it are executed w/o waiting for promise to fulfill

function getDatafromNewPromise(){
    pinkyPromise.then(res=>{
        console.log('promise fulfilled, line 89')
        console.log(res)
    });  // Javascript waits for none => attached callback func will be executed after 10 sec
    console.log('Namaste Javascript, 99')   // this line will be executed w/o waiting for above line ==> js continously executes
}
getDatafromNewPromise()
 pinkyPromise.then(res=>{
    console.log('Hii, I am pinky pinky promise')
 })


//  how fetch api works in js
// 1) fetch api returns a promise called as response 
// this response has a body which is to be again converted into a json value ==> that is again a promise
// once json is fullfilled => the data can be used

// for e.g.
// const res =  await fetch('url')
// const jsonVal = await res.json()
// console.log(jsonVal)


// how to handle errors using async await ==> use try catch for e.g.

async function Ram(){
    try{
        const res = await pinkyPromise
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log('understood how to handle errors')
    }
}

Ram()

// also we can handle erros by using

Ram().catch(err=>{
    console.log(err)
})