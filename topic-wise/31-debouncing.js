let count = 1;
const fetchData = async (urlSelected) => {
  try {
    console.log(`Fetching data... (${count++})`);
    const response = await fetch(urlSelected);

    console.log(response, 'data received');
  } catch (err) {
    console.error(err);
  }
};

// const { enabled = false } = someObject || {};

const debouncingDecorator = (fn, delay) => {
  let timer;
  return function (...args) {
    const context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      console.log('args', args);

      fn.call(context, ...args);
    }, delay);
  };
};

const url =
  'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg';

const debounce = debouncingDecorator(fetchData(url), 300);

// controlNetworkCalls(event, 'extraArgument')

// Example Calls and Closure Access
// First Call to controlNetworkCalls:

// javascript
// Copy code
// controlNetworkCalls();
// The first time controlNetworkCalls is invoked, timer is undefined.
// timer = setTimeout(..., 300); sets a new timeout, and timer is now a reference to this timeout.
// Second Call to controlNetworkCalls (within 300ms):

// javascript
// Copy code
// controlNetworkCalls();
// The same controlNetworkCalls function is invoked again.
// It has access to the same timer variable because of the closure.
// if (timer) clearTimeout(timer); clears the first timeout using the reference stored in timer.
// timer = setTimeout(..., 300); sets a new timeout, and timer is updated to hold the new timeout reference.
// Third Call to controlNetworkCalls (within 300ms of the second call):

// javascript
// Copy code
// controlNetworkCalls();
// The same controlNetworkCalls function is invoked again.
// It accesses the same timer variable.
// The previous timeout is cleared.
// A new timeout is set, and timer is updated again.
// Simplified Concept
// Single Returned Function: debouncingDecorator returns one debounced function. This function is assigned to controlNetworkCalls.
// Closure: The returned function maintains access to the timer variable from its lexical scope.
// Persistent timer: Each time controlNetworkCalls is called, it operates on the same timer variable because it is part of the closure created by debouncingDecorator.

//  Application : network calls control in search box - ecommerce service ==> api call made when user stops typing
