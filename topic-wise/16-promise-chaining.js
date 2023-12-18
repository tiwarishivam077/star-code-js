
const cart =['shoes', 'pants', 'kuta']

const promise = createOrder(cart);  // ==> generate orderID  with all details

// Promise Chaining ==>

createOrder.then(orderId=>{
    console.log(orderId)
    return orderId    // keep returning thing from the top of the chain
})
.then((orderId)=>{
    return proceedToPayment(orderId)
})
.then((paymentInfo)=>{
    console.log(paymentInfo)
    return updateWalletBalance(paymentInfo)
})
.catch(err=>{
    console.log(err.message)   // this catch will handle every error in the top chain
})
.then(()=>{
    console.log('If a .then is attached after .catch, it will be executed no matter what')
})

new promise => proceedToPayment(orderId); //==> take you to payment gateway


// Promise Constructor ==> creating a promise ==> createOrder

function createOrder(cart) {
    const prms = new Promise((resolve, reject) => {  // resolve and reject are functions given by JS to build promises
    // write logic for createOrder
    // write validateCart
    // get OrderId from api call

    if(!validateCart(cart)){
        const err = new Error('Cart is not valid')
        reject(err) // promise rejected
    }
    // write some logic to createOrder ==>then===>

    const orderID = '12345'
    if(orderId){
        resolve(orderId) // promise resolved with orderId
    }

});

return prms;
}

function proceedToPayment(orderID) {
    const prms2 = new Promise((resolve, reject) => {  // resolve and reject are functions given by JS to build promises
    // write logic for proceedToPayment

    if(!PaymentSuccessful()){
        const err = new Error('Payment could not be successful')
        reject(err) // promise rejected
    }

    const transactionID = '123fiwfeno45efc'
    if(transactionID){
        resolve('Payment Successful') // promise resolved with orderId
    }

});

return prms2;
}

function updateWalletBalance(paymentInfo) {
    const prms3 = new Promise((resolve, reject) => {  // resolve and reject are functions given by JS to build promises
    // write logic for proceedToPayment

    if(!PaymentSuccessful){
        const err = new Error('Payment info not available')
        reject(err) // promise rejected
    }
    // else
    const wallentbalance = '439842042'
    if(wallentbalance){
        resolve(wallentbalance) // promise resolved with wallet balance
    }

});

return prms2;
}


// homework ==> create 4 promises ==> do promise chaing ==> handle error
// 1) createOrder 2) proceedToPayment 3) showOrderSummary 4)updateWallet