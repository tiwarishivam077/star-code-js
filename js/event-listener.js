 //Maintaining Events/DOM Events

 /*for e.g.
 1) web pg load
 2)Mouse Click
 3)Img Load
 4)mouse hover
 5)input field change
 6)key stroke
 7)HTML form submitted
 */ 

let clicked=()=>{
    console.log('I am Clicked')
    //alert('Okay')
}
let hover =()=>{
    console.log('Mouse Hovered')
}

let out =()=>{
    console.log('Mouse Out')
}

let print =()=>{
    console.log(' DOM content loaded', 'el is loaded')
}

let add=()=>{
    console.log('add function invoked => 3+5=8')
}

let subtract=()=>{
    console.log('Subtract function invoked ==> 10-5=5')
}

let print2=()=>{
    console.log('load event triggered')
}

//button selected using id
 let btn = document.getElementById('btn')

 //click function added on any click event on button 
 btn.addEventListener('click', clicked)

 // Multiple events can be attached to a particular element
 //for e.g.

 btn.addEventListener('mouseover', hover)
 btn.addEventListener('mouseout', out)

 //Multiple functions can be added on a particular event on an element
 //for e.g.
 //btn.addEventListener('click', print)
 btn.addEventListener('click', add)
 btn.addEventListener('click', subtract)


 //Remove Event Listener
 btn.removeEventListener('click', print)

 //Page Load Events

 /* 1) DOMContentLoaded  ==>> this event triggers after only HTML is fully loaded on window/browser & completed DOM tree. 
 CSS, Imgs,externsl resources not yet loaded for e.g.*/

 window.addEventListener('DOMContentLoaded', print)

 /*  2) load Event ==> this event triggeres when browser/window fully loads all HTML,CSS and external resources like imgs */

 window.addEventListener('load', print2) 

 //load event can also be added to a particular element, for.e.g

 const func=()=>{
  console.log('el element loaded')
 }
 el = document.getElementById('Ram')
 console.log(el.innerHTML, 'el')
 el.addEventListener('load', func)

function newColor(){
    el= document.getElementById('box')
    el.style.cssText=" background-color :red; color: white"
}

function originalColor(){
    el= document.getElementById('box')
    el.style.cssText=" background-color :yellow; color: blue"
}

let disappear=()=>{
    console.log('double clicked')
    parent= document.getElementById('box')
    console.log(parent.children[0], parent)
    parent.removeChild(parent.children[0])
    
}
//Mouse Events
let div = document.getElementById('box')
div.addEventListener('click', newColor)  // on clicking any element
div.addEventListener('mouseout', originalColor)  //on taking mouse away from particular element
div.addEventListener('dblclick', disappear )


// 3) oncontext menu ===> on right click
//4) dblclick ==> on double click
// 5) onmousedown  ==> The onmousedown event occurs when a user presses a mouse button over an HTML element.


let checkkey=()=>[
    console.log(event.key) // prints the key pressed on the keyboard
]
//Keyboard Events
window.addEventListener('keydown', checkkey)

//scroll events

window.addEventListener('scroll', newColor)