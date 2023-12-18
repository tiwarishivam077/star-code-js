// Inheritance as a concept in js is completely different from other languages

// Inheritance is like ==> one object trying to access methods and properties of other object

let arr=['Shivam', 'Sai']

const a='200'
const b='3'
console.log(b/2)
console.log(a-b+10*b/2)
// when you type 'arr.' on console in dev tools ==> you see so many methods 
// ==> where do they come from ? we didn't define them

let object ={
    name:'shivam',
    city:'BLR',
    intro(){
        console.log(this.name+ ' '+ this.city)
    }
}

function play(){
    console.log('play')
}
// similarly this object is getting access to other properties and methods 
// such as toString function ==>  there is something known as prototype

// whenever you create an object or an array or any functions or a variable in js, 
// js engine  automatically puts (some hidden properties and methods) into an obejct
//  and then attaches this object to your object and that is how you get access to 
// those properties and methods

// we can access these properties by writing ==> arr.__proto__.'****' => **** = func name
// similarly for objects and function also

// basically porotype object is attached to every object, method, array, func
// properties of this object can be acessed directly by using dot operator

// arr.__proto__  ..? 

// prototype chaining ..?

// type in console
// 1) arr.__proto__ and Array.prototype  ==> both are same objects
// 2)arr.__proto__.__proto__ ==> is another object = to Object.prototype
// 3)arr.__proto__.__proto__.__proto__ ==> null = Object.prototype.prototype
// 4) object.__proto__ ==> Object.prototype
// 5) object.__proto__.__proto__ = null
// 6) similarly for function ==> play.__proto__ = Function.prototype
// 7) play.__proto__ .__proto__ = Object.prototype


// from here we can say that everything in js is nothing but an object
// as object prototype is attached to everything in the js



let object2 = {
    // name:'Satyam'
}

// Never do this in real life   `coding ==>      directly modifying prototype of object2
object2.__proto__=object
// now proto of object2 is pointing to the object defined at the top
// now object2 can access all the properties of object
// try in console ==> object2.name, object2.city, object2.intro()

// this is how object2 inherits the object 
// this is what prototypal inheritance is

console.log(object2.intro())


// similarly we can atach some common function to the Function prototype
// for e.g.

Function.prototype.cricket=()=>{
    console.log('India wins 2023 world cup')
}

function fun(){

}

fun.cricket()


// read about HasOwnProperty function in object prototype

console.log(object.hasOwnProperty('name')) 
// ==> checks whether a property is present in an object or not


function Human(){
    this.lifeSpan = 100
 }
 
 Human.prototype.breathe = function(){
     console.log('I am breathing...')
 }

 let rohan = new Human()

 console.log(rohan.breathe(), '******************')

 
// constructor function
function Profile(n,a,o,h ){
   this.name=n,
   this.age = a,
   this.occupation = o,
   this.address = h
   this.intro=()=>{
    console.log( this.name + ' '+ this.age + ' ' + this.occupation + ' ' + this.address)
   }
}


let Shubham = new Profile('shubham', '26', 'backend', 'banaras') 
let Rohit = new Profile('Rohit', '26', 'data', 'katihar' )
console.log(Shubham, Rohit)


// it is important to note that ==> properites in a constructor func
// is copy pasted in the object ==> properties amy differ for each new object
// but methods remains the same for each object i.e. intro, there is no need to 
// copy and paste intro method in every object as it violates dry concept
// instead we can declare intro method in constructor function prototype

// Use of prototype
Profile.prototype.introduction = function(){
    console.log('I am function attached to prototype,', this.name + ' **** '+ this.age)
    console.log(this.name + ' **** '+ this.age)
}

console.log(Shubham.introduction(), '===>>>')


// how to connect Profile functions prototype to some other prototype

Profile.prototype.__proto__ = Object.create(Human.prototype);

console.log(Rohit.breathe(), 'cnvbskvdsk')