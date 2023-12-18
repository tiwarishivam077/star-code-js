let multiply =function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2) // bind method returns a copy of function multiply 
// and it does not invoke it directly
// the returned function is exactly same as

let multiplyBYTwo=function(y){
    let x=2;
    console.log(x*y)
}
multiplyBYTwo(5)
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this, 3);  //==> copy of func multiply with first argument as 3

multiplyByThree(5)

// what if we pass one more parameter to bind function
let multiplyByNumber = multiply.bind(this,2,3)
multiplyByNumber(5) // here 2, 3 become the default arguments 2=> x. 3=> y ignore =>5



// function closures to do function currying

let mutiply = function(x){
    return function(y){
        console.log(x*y)
    }
}

let muLtiPlybyTwo =mutiply(2)
muLtiPlybyTwo(3)


// Function Currying ===>>

// write a function which can take n arguments and return their product
//  e.g. => prod(1)(2)(3)(4)(5)...() ===> 1*2*3*4*5*....*..

const prod=(a)=>{
  return function (b){
    if(!b)
       return a*1;
    else
       return prod(a*b)
  }
}

console.log(prod(1)(2)(9)(9)())


// where to use currying ==> 
// suppose you want to target a particular html element using getElementbyID==>{
    // you can write a function which takes #id of the element and inturn returns another
    // function which takes the content which user can pass as per his wish} 
// user no longer needs to target the element again and again

// since you are returned a function ==> this returned function can be used multiple times
// to make changes when required