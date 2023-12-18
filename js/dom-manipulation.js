//DOM Manipulation

// 1) selecting the element by Id
let temp = document.getElementById("x")
console.log(temp.outerHTML, 'initial state')

//temp.innerHTML="I have changed the text inside"  //this line replaces all the child html tags inside parent tag with text


//  2) selecting the element by Class
let aish = document.getElementsByClassName("aish") //returns an array of all the elements selected under aish ;

// aish becomes an array of all the elements having class='aish'
//console.log(aish[0].outerHTML,',  outerHTML,  ', aish[0].innerHTML,   ',  innerHTML,  ',aish[0].innerText, ', innerText')


//DOM manipulation using setTimeout() innerHTML, outerHTML, innerText
setTimeout(()=>{
    
    setTimeout(()=>{
        aish[0].innerHTML='<h1>I am Shivam</h1>'
        console.log(aish[0].innerHTML, 'again changed the innerHTML')
    }, 3000)

    setTimeout(()=>{
        aish[0].outerHTML='<div><h1>Hey I am a Div</h1> dfwkwkjfwkjwbfkj</div>'
        console.log(aish[0].outerHTML, 'now changed the outerHTML')
    }, 6000)
    
    aish[0].innerHTML='<p>I am Mercedes</p>'
    console.log(aish[0].innerHTML, '=====>> first changed state')
}, 10000)


setTimeout(()=>{
    temp.innerHTML="I have changed the text inside";
    console.log(temp.innerHTML, '<<=====>> final state changed the innerHTML of Ul')
}, 200000)


const myfunc=()=>{
    console.log('my func called')
}
let timeoutId = setTimeout(myfunc, 5000)    //setTimeout function returns an id, which can be used to call off the function

if(true) 
clearTimeout(timeoutId) // this command cancels the myfunc from executing after 5 secs, like alarm turned off





// 3) Selecting an element by Tag name
let div = document.getElementById("2") 

console.log(div.innerHTML)

temp = div.getElementsByTagName('h2')
console.log(temp[0].innerText)

 for(el in temp)
 console.log(temp[el].innerText, el)

// 4) Query Selector
//temp=document.querySelector('p.1')   Not working
console.log(temp.innerHTML, "querySelector")

// 5) Traversing Elements after selection
temp=document.querySelectorAll('ul')   //selects all the ul elements in the body 
console.log(temp[0].innerHTML)

//first child element
let child=temp[0].firstElementChild.innerHTML
console.log(child)

//last child element
child=temp[0].lastElementChild.innerHTML
console.log(child)

//all children
 let childArray = temp[0].children
 for(el in childArray)
 console.log(childArray[el].innerText, el) //printing all the child elements

 // targeting parent element
child=document.getElementById('child')
console.log(child)
let parent = child.parentElement
console.log(parent)

//targeting sibling element
console.log(child.nextElementSibling, 'next sibling')
console.log(child.previousElementSibling, 'previous sibling')
console.log(child.nextElementSibling.previousElementSibling, 'same child element')

// create and append new element
temp=document.getElementById('unique')
console.log(temp, '89')

//new element created i.e. = h1
let new_el = document.createElement('h1')

// new text element created
let text = document.createTextNode('xyz')

//text added to new element
new_el.appendChild(text)
console.log(new_el)

//new_el added to temp
temp.appendChild(new_el)

console.log(temp.innerHTML,temp.innerText, 'printed')

// How to add class/id to new_el
new_el.className='Earth Mars Jupiter'
new_el.id='Sun'
console.log(document.getElementById('Sun').innerHTML)


//appending new_el in the body of HTML
document.body.appendChild(new_el)

// methods to add text to newly created element
let bhole=document.createTextNode('O Bhole Nath Ji, O Sambhu Nath ji')
new_el=document.createElement('li')
new_el.appendChild(bhole);
console.log(new_el)

let brand_new_el = document.createElement('a')

brand_new_el.textContent='I am the anchor tag'  //added text content to the new element

//brand_new_el.title= "this is a link"
brand_new_el.href ='https://youtube.com'

document.body.appendChild(brand_new_el)

console.log(brand_new_el.textContent, ',  text content in anchor tag...!')


//Insert Before Function
// since appendChild helps adding the new child at the end position, insertBefore function helps inserting element before the targeted element
// select the previous element

 div = document.getElementById('shiva')  //parent element targeted
 new_el = document.createElement('p')  //new element created
 new_el.textContent= 'Anadi Ananta'   //text added to new element

 //Now position is required, where to add this new element, position is selected
 let position = div.firstElementChild
 console.log(position)

 //insertion command
 div.insertBefore(new_el, position) 

 new_el2 = document.createElement('p')  //new element created
 new_el2.innerHTML= '<h1>Utre Mujhme Adiyogi</h1>'   //text added to new element
  let new_position = position.nextElementSibling
  console.log(new_position.textContent)
  div.insertBefore(new_el2, new_position)
 


 position=position.nextElementSibling //position changed

 div.insertBefore(new_el, position)

//Remove Child Element
parent = document.getElementById('menu')

el=parent.firstElementChild.nextElementSibling

console.log(el.textContent, 'child-selected')

setTimeout(() => {
    //parent.removeChild(el)
},
  1000
)

// Removing the entire Ul list i.e parent element
parent=document.getElementById('menu')

setTimeout(()=>{
    document.body.removeChild(parent)
},5000)


//clone-copy element
//targeting element to be cloned

let parnt=document.getElementById('mirzya')
el=parnt.firstElementChild
temp=el.cloneNode(true)  //when true mentioned inside braces, child element also get colned
parnt.appendChild(temp)
let cloned_el = parnt.cloneNode(true)
document.body.appendChild(cloned_el)



//Replace element in JS - Not Working
// Select first child element:
el=document.getElementById('myList'),children[2]
// create a new element
new_el= document.createTextNode('Latte')
el.replaceChild(new_el,el.childNodes[0])



var myDate = "10-08-2023";
myDate = myDate.split("-");
var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
console.log(newDate.getTime());