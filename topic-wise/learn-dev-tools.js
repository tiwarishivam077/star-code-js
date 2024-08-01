

function calculateFactorial (x){
     let temp = 1, current = 1
    while(temp<=x){
        current = current*temp 
        temp++
    }
    return current;
}


const decoratorFunction =(func)=>{

    const cacheMap = new Map()
   
    return (x)=>{
        if(cacheMap.has(x)){
            console.log('value already present');
            return cacheMap.get(x)
        }
       const ans = func(x)
       cacheMap.set(x, ans)
       console.log('new value calculated');
       return ans;
    }

}

let getFactorial = decoratorFunction(calculateFactorial)

console.log(getFactorial(3), 'getFactorial 3 ');
console.log(getFactorial(4), 'getFactorial 4 ');
console.log(getFactorial(5), 'getFactorial 5 ');
console.log(getFactorial(5), 'getFactorial 5 ');
console.log(getFactorial(4), 'getFactorial 4 ');
console.log(getFactorial(3), 'getFactorial 3 ');

// Learnt how to use debugger in dev-tools