//  Pollyfill of Throttling

let delay = 300;
const url =
  'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg';

const getApi = async () => {
  console.log('Throttled function called');
  try {
    const response = await fetch(url);
    const data = await response.json;
  } catch (error) {
    console.error(error);
  }
};

const throttledFunction = (func, delay) => {
  let flag = true; // set flag = true ==> accessed each time via closure

  //   inorder to pass the arguments and context to the func, we need to declare context and arguments
  let context = this;
  return function (...args) {
    if (flag) {
      func.apply(context, args); // func  executed only if flag = true
      flag = false; // after func executed, flag = false ==> accessed each time via closure
    }
    setTimeout(() => {
      flag = true; // set flag = true ==> only after delay time lapsed
    }, delay);
  };
};

let controlledFunction = throttledFunction(getApi, delay);

//  Throttling is used in multiple places ==> suppose we are scrolling an ecommerce webapp, as we scroll,
//  more and more products are loaded on scroll, data is loaded on network calls, scroll event listener
// is used to make netowrk calls, if we make network call on each scroll event, the sever will go down, as one small
// scroll generates hundereds of scroll events, hence it order to controll, throttle network calls, we use throttling
//  network calls are made only after certain delay(time interval) from previous network call

// One more application can be some mobile games which including shooting by guns, We can controll the speed
// at which bullets are fired using throttling by simply playing with delay time after bullet fired.
