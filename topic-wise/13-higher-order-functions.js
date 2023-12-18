// Introduction to Functional Programming

// Higher Order Functions ==>  a func which takes another func as an argument or returns another function 
// from it, is c/a Higher Order function

function x(){
    console.log('Namaste Bharat');
}

function y(x){
x()
}


// here x is the call-back function and y is the higher-order function

const radius = [4, 6,8,10];
// write function to calculate area, perimeter, diameter of  each circle

// method 1
const calculateProperties = function (radius){
    const diameter = [];
    const area = [];
    const perimeter =[];
    radius.forEach((element) => {
        // console.log(element)
        perimeter.push(2*Math.PI*element)
        area.push(Math.PI*element*element)   // dry concept ==> don't repeat yourself
        diameter.push(2*element)
        
    });
    console.log(diameter, perimeter, area)
}

calculateProperties(radius)

// method 2  ==> Functional programming ==> here each func is independent 
// and dedicated to particular objective i.e. area/diameter/ or circumference
// another func is calculate whose task is do calculation as per the requirement
// logic is taken as the callback function ==> which gives output as per requirement

// Functional programming says think the logic in your head in the form of independent functions
// reusability, modularity, how you pass and return functions to different functions


const area = function(radius){
    return Math.PI*radius*radius
};

const circumference = function(radius){
    return 2*Math.PI*radius
}

const diameter = function(radius){
    return 2*radius
}

const calculate =(arr, logic)=>{
    const output = []
    arr.forEach(element=>{
        output.push(logic(element))
    })
    return output
}

console.log(calculate(radius, area),calculate(radius, circumference),calculate(radius, diameter))

// the same operations can be performed using map function // let's see

console.log(radius.map(area))


// if we use prototype inheritance ==> we can add calculate function to prototype of all arrays
// for e.g.

Array.prototype.calculate = function(logic){
    const output =[]
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    }

    return output
}  

// self-built map function can now be invoked in the same manner as map is invoked // polyfill for map

console.log(radius.calculate(area), 'home map func')