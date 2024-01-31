const cart = ["shoes","pants","kurta"];

const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
    return orderId;
})
 .then(function(x){
    return proceedToPayment(orderId);
})
 .then(function(paymentInfo){
    console.log(paymentInfo);
})
 .catch(function(err){
    console.log(err.message);
})
 .then(function(orderId){
    console.log("No matter what happens this will definietly be called ");
 });


function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "12345";
        if(orderId)
        {
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    });
    return pr;

}

//logic for createOrder
function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful");
    })
}