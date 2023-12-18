// map, filter, reduce are the higher-order-functions in js

// 1) let's understand map function ==> it is used when you wish to transform an array
// for e.g.

const arr=[2,3,4,5,6,7,8]

// Double =[4,6,8,10,12,14,16]
// Triple = [6,9,12,15,18,21,24]
// modulus %5 = [2,3,4,0,1,2,3]
// binary =[.. .. ...]
// synctax to use map function is

console.log(arr.map(transformationLogic4))  // logic is a function using which array is transformed

function transformationLogic(x){
  return x*2   //double the values
}

function transformationLogic2(x){
  return x*3   //double the values
}

function transformationLogic3(x){
  return x%5   //double the values
}
function transformationLogic4(x){
  return x.toString(2) //return binary transformation
}


// map function can also be written as

const newarr= arr.map(x=>x/0.1)  // arrow function inside map function

console.log(newarr, 'dwfwfw', 'sai')


// 2) Filter function ==> used to filter values out of an array


const result = arr.filter(x=>x%2!==0)

console.log(result)


// 3) Reduce function ==> is used at a place where you use all the elements inside the array and 
// come up with a single value out of them fore.g. ==> sum of all elements in array, maximum /minimum element of array

function findSum(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}

console.log(findSum(arr))

// how to use reduce ==>> to find sum

const output = arr.reduce(function(acc, curr){
  acc+=curr
  return acc;
}, 0) // 0 is the initial value of the accumulator

// acc = accumulator ==> it accumulates the result we are looking for from the array
// curr == current ==> it iterates the current value, each element of array
// but the accu must be initialised to some value, zero in this case
// the second parameter is used to initialise the accumulator

console.log(output)