document.write('Jai Shree Raam')

let temp = document.getElementById('xyz')
// console.log(temp.outerText)
// temp.innerHTML="Siya Pati Raam Chandra ki Jai"
let a='shivam';
var b=150122035;
let c=8;

// console.log(typeof a, typeof b, typeof c)
// console.log(a, b**c**b)

// console.log(`hey I am Shivam , My roll number was ${b} during my stay @ IITG`) //template literal


let x=100,y=20;

 function printX(){
    // console.log('x is greater than y')
    return 214;
}

function printY(){
    // console.log('y is greater than x')
    return 10;
}

// x+y>70 ? console.log('x+y>70') : console.log('x+y<70')
   
 let result = x>y ? printX : printY   // i.e. a function can be assigned to a variable

 a=result()
// console.log(a)

result = printX()
// console.log(result)

   

 



//Prompt

// let chem = Number(prompt('enter chemistry marks M.M.=100', 100))
// let physics = Number(prompt('enter physics marks M.M.=100', 100))
// let maths = Number(prompt('enter maths marks M.M.=100',100)
// )
// console.log(typeof chem)

// console.log(chem, physics, maths,'marks')

// let percentage = Number(chem) + Number(physics) + Number(maths);

// console.log(percentage, 'sum')
//  percentage/=3;
// console.log(percentage,'%');

// let grade = percentage>=90 ? 'A' :
//             percentage>=80&& percentage<90 ? 'B' :
//             percentage>=70 && percentage<80 ? 'C' :
//             percentage>=60 && percentage<70 ?'D':
//             percentage>=50 && percentage<60 ? 'E' : 'F'
            
//             console.log('grade obtained is ', grade);




// Ternary Operator
 a = 21, b=35, c=4;

 let relation  = a>b&&b>c ? 'a is greatest and c is smallest' :
                 b>a&&a>c ? 'b is greatest and c is smallest' :
                 c>a&&a>b ? 'c is greatest and b is smallest' :
                 c>b&&b>a ?'c is greatest and a is smallest' : 
                 b>c&&c>a ? 'b is greatest and a is smallest' : 'a is greatest b is smallest'
                
                //  console.log(relation)



  //  temp = prompt('Hey', 'Jai Shree Ram')    
  //  console.log(temp)
   


   //Confirm
// let response  = confirm('Are you sure?, you want to delete!')

// if(response){
//     console.log('deleted')
// }
// else{
//     console.log('ignored')
// }
    
    /*

    topics covered till now....
    1) Ternary Operator
    2) alert, prompt, confirm
    3) how to connect js file to html
    4) what is ECMAScript, ES6
    5)document.write('')
    6)document.getElementById('')
    7)innerHTML
    8)innerContent
    9) let, var, const
    10) template literal
    11)data-types

  Next topics to be covered
      1) Type Conversion 
      2) String Manipulation
      3) Array Manipulation/methods
      4) Argument Object
      5) Objects in JS........

*/


//Data type Conversion

let number = 4;
// console.log(typeof number)

// console.log(typeof String(number), typeof Boolean(number), Boolean(number), String(number), typeof Number(String(number)))

let str= '123', bool = 1, str2='0'
// console.log(Number(str), String(bool), Boolean(str2), 'jfjjhkh')




//String Manipulation

let para = 'Hello I am Shivam Tiwari, I work in YUMA as a Full Stack Developer'

//length of string
// console.log(para.length)

//concatanation
// console.log(para+' '+ str)

//subString Extraction
let substr = para.substring(18,56)  // In substring function we pass idx1 and idx2 of the string
// console.log(substr)

substr = para.substr(0, 66)   //In substr function we pass idx and length of the string
// console.log(substr)



temp = 'Wo Lamhe, wo batein, Koi na jaane, ye kaisi ratein ho barsatein, wo bheegi bheegi yadein  '


// In order to cut-out a substring from a particular index and a specific length, use substr(idx, len) function
//If you want a substring between two indices of a string use substring(idx1, idx2) function

substr = temp.substring(0,10) // returns a substring from idx (0) to idx(10-1)
// console.log(substr)

substr=temp.substr(0, 54)   //returns a substring from index 0 and length 54
// console.log(substr)



//Index of character/substring in a string, In case there are more than one same substring, give the length
// of the characters after which the substring exist

//console.log(temp.indexOf('batein'))
//console.log(temp.indexOf('wo',1))
//console.log(temp.lastIndexOf('wo'))


//Slice Function of String, Slice function takes idx1, idx2 as arguments and return substrng from idx1 to (idx2)-1
substr =temp.slice(0,29)
console.log(substr, 'sliced-substr') 


//
//Replace function in String, 
temp.replace('Wo Lamhe, wo batein', 'Shivam')
console.log(temp, '   ------>temp replaced')


//To remove white spaces in string at start and end of the string, use .trim() function
//console.log(temp.trim())



//Arrays

let books = ['Maths', 'Polity', 'Geography', 'Ethics'];
books.push('economy')   //added at the tail end
//console.log(books)
books.unshift('cse')  //added at the head
//console.log(books)
books.pop()    //removed tail element
//console.log(books)
books.shift();   //removed head element
//console.log(books)


let cities = ['BLR', 'BOM', 'LKO', 'PNQ', 'CNB']

// console.log(cities, '1');
// cities.push('Varanasi')
// console.log(cities, '2');
// cities.unshift('jalandhar');
// console.log(cities, '3');
// cities.pop()
// console.log(cities, '4');
// cities.shift();
// console.log(cities, '5');


//push(x) is analogous to unshift(x), pop() is analogous to shift()

//splice is for arrays, slice is for string
console.log(cities)
let array = cities.splice(0,3)    //array.splice(idx, len) similar to string.substr(idx, len)
console.log(array, 'array', cities, 'cities') // array contains elements of cities from index zero and its length is three
// console.log(cities, 'cities')
//Joining elements of an array
console.log(cities.join('++'))  //this function joins the element of the array using the text inside quotes

/*String methods
1)string.length()
2)string.substr(idx, len),
3)string.substring(idx1, idx2),
4)string.trim(),
5)string.split('text, character')
6)string.includes(''),
7)string.indxOf('character, substring)
8)string.lastIndexOf('substring', position)
9)string.slice(idx1, idx2)
*/

/*
Array Methods
1)Array.length()
2)Array.splice(idx1, len),
3)Array.push('x')
4)Array.unshift('x')
5)Array.pop()
6)Array.shift()
7)Array.join('substring')
8)Array.split('character/substring)
*/ 


// The Argument Object in JS
// Suppose we want to create a function in which the number of arguments passed are not fixed,
// in such case one can pass as many arguments as required and all of them are stored in 
// argument object which can be accessed one by one using for loop
// for e.g.

function addition(){
  let sum=0;
  for(let i=0; i<arguments.length;i++){
    //console.log(arguments[i]);
    sum+=arguments[i];
  }
  console.log('Sum = ', sum);
}

// addition(1,2,3,4,5)
// addition(6,8,10,2,4,67,45,78,90)


//Object in JS

let person = {
  first_name: 'Shivam',
  last_name:'Tiwari'
}

// console.log(person, person.first_name, person.last_name, person.age);  //dot notation to accesds properties

// console.log(person['first_name'], person['last_name'])  // array notation, important in some cases

//Adding new properties to existing object
person['age']= 27;
person.address= 'Green Glen Layout'
person['height'] = '6\'2"'

// console.log(person)


//Deleting property of the object

delete person.height;  // deleted height from the object
// console.log(person)

delete person.address
// console.log(person)

//Check whether a particular property exist in object or not
// console.log('address' in person) // return boolean (false)


// for-in loop to access all the properties of an object  
for(let p in person){
  // console.log(p)  // it prints the properties, but not their values
}

// in order to print the values of properties as well use

for(item in person){
  // console.log(item, ' ', person[item])   //array notation
}

// Methods in Objects/Function in Objects

person.sayHi = function()
{
  // console.log('Jai Shree Ram!')   //Method is added here outside the declaration
}

person.sayHi() //Method is called here

//Method can also be added during declaration for e.g.

let additionMachine ={
  x:5,
  y:15,
  z:45,
  printSum(){
    // console.log(this.x+ this.y+ this.z);
  }
}

additionMachine.printSum()
additionMachine.x=45;
additionMachine.y= 90;
additionMachine.z=345;
additionMachine.printSum()

function percent() {
  // console.log('total percent = ', (this.x+this.y+this.z)/3)
}

additionMachine.percent = percent

additionMachine.percent()


//Math Object
// console.log(Math.min(34,67,89,23,-1))
// console.log(Math.max(23,65,78,34,90))

// console.log(Math.round(34.657))
// console.log(Math.ceil(44.1))
// console.log(Math.floor(45))



//Date Object
 let date = new Date()   //stores the date of computer
// console.log(date)

// date = new Date( 2023,0,4,10,30,56,45 )     //can take upto seven arguments in order
// yr, month, day, hr, min, sec, millisecond, month starts with 0, jan=0, feb=1

// console.log(date)

// Date Extraction
// console.log(date.getFullYear()) //2023
// console.log(date.getMonth()) //Jan(0)
// console.log(date.getDate())  //4
// console.log(date.getHours()) //10
// console.log(date.getTime())    // gives timestamp in milliseconds
// console.log(date.getMinutes()) //30
// console.log(date.getDay())  //Wednesday(3)

//Date Modification

date.setFullYear(2024)
date.setMonth(1)
date.setDate(1)
date.setHours(10)
date.setMinutes(5)
// console.log(date)

//new keyword
 person = new Object();  //new object created here, properties can be created now
person.fullname = 'Shivam Tiwari'
// console.log(person)


//Getter and Setter
//Getter and setter function convert a method in an object into property of that object
// i.e. you don't need to put braces at the end for e.g.

 person = {
  name: 'Satyam',
  age: '21',
  getName(){
    return this.name.toUpperCase()
  }
}

// console.log(person.getName())  //accessing getName() as a method here

//now 

let student = {
  name: 'Priyanshu',
  age: '22',
  college: 'AFMC Pune',
  get getCollege(){
    return this.college.toLowerCase()
  },

  set setCollege(params) { 
    this.college = params.toUpperCase()
  },
}

// console.log(student.getCollege)  // here accessing the method as property

//console.log(student.setCollege('AIIMS Delhi'));   here it shows error as we are accessing the setter as method

// using it as a property

student.setCollege='AIIMS Delhi'

// console.log(student.college) // Printed AIIMS DELHI is uppercase



// Object Constructor Function in JS   ====>>  this is used to remove redundant code

function Student(x,y,z,a,b,c){
  this.first_name=a,
  this.last_name=b,
  this.age=c,
  this.father_name=x,
  this.mother_name=y,
  this.college_name=z

}

let shiv = new Student('a','b','c','x','y','z')
// console.log(shiv)
satyam = new Student('a','b','c','x','y','z')
raghav= new Student('a','b','c','x','y','z')
rohit = new Student('a','b','c','x','y','z')

// console.log('satyam', satyam, 'raghav', raghav,'rohit', rohit)

//suppose we want to add extra property to object satyam we can add simply by

 satyam.nationality='Indian'

//  console.log(satyam)

 //Method Fullname added to object satyam  but not to the object constructor function
 satyam.FullName=function(){
  return this.first_name+this.last_name
 }
//  console.log(satyam.FullName())  

 //how to add properties/methods in constructor function outside the object later
 //prototype concept ==> prototype is the highest class in js which is inherited by every class

 Student.prototype.nationality = 'Indian' // nationality property added to constructor function

 Student.prototype.fullName=function(){
  // console.log(this.first_name+ ' '+ this.last_name)
 }

 raghav.fullName()

 // Methode fullName is added to Constructor function
 