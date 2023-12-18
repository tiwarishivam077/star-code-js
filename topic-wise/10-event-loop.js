// 1) JS ==> single-threaded ==> synchronous language
// 2) JS ==> has only one call stack ==> can execute one command at a time
// 3) this call-stack is present inside JS engine ==> all code is executed inside call-stack only

// for e.g.
function a(){          // when code is executed ==> G.E.C is created, pushed inside call-stack
    console.log('a')   //entire code runs line by line ==> line 7 ==> func defintion of a ==> a : func defintion
}                      // line 9: func invocation ==> E.C. is invoked to execute func a ==> pushed inside call-stack ==> code executed line by line
a();                   //a is printed on console. ==> nothing left inside func a() ==> a's E.C is poped up outside call-stack
console.log('End')     // now control moves to line 11 ==> End printed on console, nothing left ==> G.E.C pops up from call-stack

//from the above example we learn ==> CallStack executes everything that comes inside it, it doesnot wait for anything
// Time Tide and JS waits for None

// Now what if we need to wait for sometime, what if we have a program which needs to be run after 5 seconds ==> call-stack cannot do that
// because it does not have the timer ==> so if we want to have count of timer ==> we need super powers of the timer in the browser

// Browser has JS engine inside it and call-stack is present inside JS-engine
// Browser has 1) local-storage 2) Timer 3) Bluetooth-Access 
// 4) can make network calls  - urls(https) - connect to servers 5)display on UI 6) Others

// see img ==> browser.png in the folder topic-wise

// So while running the code inside JS call-stack ==> we need access to all these super powers of 
// browser ==> hence we need some connection ==> JS engine need some ways tro access them

// Web APIs  are the ways to access al those super powers
// 1) setTimeOut() ==> not a part of JS it's a web api
// 2) DOM APIs ==> document.getElelmentbyID ==> not part of JS
// 3) fetch() ==> not part of JS
// 4) localStorage ==> not part of JS
// 5) console.log ==> not part of JS 

// all of them are kind of super-powers of the Browser, see the file ==> browser-powers.png in topic-wise folder
// Browser gives the access to the call-stack inside JS engine to use all theae super powers for e.g. ==> timer, DOM tree Apis, fetch() etc

// call-stack is able to access all these powers due to the global object i.e. window to call web apis
// for e.g. window.setTimeOut or window.localStorage or window.console.log but we don't write window 
// bcoz all these web apis present in global object or global scope

// for e.g.  let's execute the below program

console.log('Start')  // GEC is created ==> pushed inside call-stack ==> 1st line ==> console.log
                     //==> will call console web api through window object ==> will log the message on browser's console 
                    //  next line ==> setTimeout ==>  will call the webApi setTimeout ==> access to timer feature of the browser  
                   // this setTimeout ==> takes a callback function and a timer 
                  // ==> setTimeout registers a call-back ==> also starts timer 5 sec and moves to the next line i.e. console.log('End')

setTimeout(function cb(){
    console.log('Callback')
}, 5000)

console.log('End')  // again web api called ==> logs the message on the console ==> timer still runnging ==> code execution is done
                // hence GEC is poped out of the call-stack and meanwhile timer is running
                // as soon as timer expires ==> this callback function is to be executed ==> also we know that all the code inside js 
                // is executed inside this call-stack ==> we some how need to push this call-back function inside call stack

                // see the file ==> event-loop.png to look at event loop and call-back queue picture

                //  so this call back cannot be directly pushed into call-stack ==> how then how..?
                // call-back-queue comes to rescue==> so when the timer expires ==> this call-back function moves inside call-back queue
                //  now it's the job of the event-loop is to keep a check on both call-back-queue and call-stack and whenever the call-stack 
                // is empty and any function is present inside call-back-queue, it transfers the call =-back function into the call-stack
                // new-execution context created ==> code executed ==> console web api called ==> logs the console
                
                // Example 2 ==>  line 1)console web api accessed ==> logs ==> line 2) DOM web api is accessed ==> addeventlistener is added ==> 
               //it registrs a call-back function insdie web apis environment and trigerred when an event is hit
              //JS waits for none ==> moves to next line ==> console.log web api called ==> it logs End on console ==> GEC pops out of the stack
                console.log('start')
                document.getElementById('btn').addEventListener('click', function bc(){
                    console.log('callback');
                });
                console.log('End')

                // but this event-listener keeps sitting inside web-api environment waiting if the event is trigerred anytime later
                // so when the user ==> clicks the button ==> the call-back method is pushed inside call-back queue and waits over there
                // for its turn to get executed  ==> now event loop comes into picture

                // Event loop's task is to continously monitor call-stack as well as call-back queue as a gate-keeper, so if the call-stack is empty
                // and this event-loop sees any call-back function waiting inside call-back-queue ==> event loop simply pushes that call-back
                // function inside the call-stack and call-back method is quickly executed

                // why do we need a call-back queue ==> suppose the user clicked the btn 5-6 times in a row ==> in that case == call-back functions==>
                // pushed inside call-back-queue waiting to be executed
                // now event loop when finds call-stack empty ==> pushes them each one by one into call-stack and they execute

                // so generally we have a lot of event-listeners timers in out code, 
                // so we need to maintain a call-back-queue to execute them in order



                // Interesting case of fetch web api ==> 
                
                console.log('start')
                setTimeout(function cbt(){
                console.log('CB SetTimeout')    //cbt registered in web api environment, 5 seconds timer
                }, 5000)


                fetch("https://api.netflix.com")
                .then(function cbF(){
                    console.log('CB Netflix')  // cbf registeres in web api environment,
                                               // waiting to fetch data
                });

                console.log("End")

                // suppose netflix server super fast => data recieved in 50 miliseconds
                //  now ideally cbf should go in call-back-queue
                //  but for fetch api  we have Microtask queue which has higher priority over call-back-queue

                //  functions inside micro-task-queue are executed prior to call-back-queue
                // callbacks function related to promises are pushed inside micro-task-queue

                // All the call-back-functions which come through promises goes inside micro-task-queue

                // Read about Mutation Observer, and Starvation of the task inside call-back-queue

                // after 5 seconds func cbT will be pushed inside call-back-queue

                // when the call-stack is empty cbT function will be executed