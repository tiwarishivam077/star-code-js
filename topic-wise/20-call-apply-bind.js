let name ={
    firstName:"Shivam",
    lastName:'Tiwari',
    printFullNAme(){
 console.log(this.firstName+ ' '+ this.lastName)
    }
}

name.printFullNAme();

let name2 ={
    firstName:"Sachin",
    lastName:'Tendulkar',
    }
// Suppose we want to print name2 on console as well ==> one way is to copy the method in name2
// other is to borrow the function

// Using call method we can do function borrowing ==> we can borrow functions of other objects use it 
// with data of other object


name.printFullNAme.call(name2) // this is how to borrow function from other objecs

//  similarly we can write function seperately and use call() for e.g.

let printName = function(hometown, state){
    console.log(this.firstName + ' '+ this.lastName + '  is from '+ hometown + ' ' + state)
}

printName.call(name)
printName.call(name2, 'Mumbai')



// Apply Method ==> 

printName.apply(name2, ['Mumbai', 'Maharastra'])  //==> other arguments passed in an array list

// Bind Method ==> returns a copy of printName function & bind to object name2object
let printMyName = printName.bind(name2, 'Mumbai', 'Maharastra')

console.log(printMyName);
printMyName()