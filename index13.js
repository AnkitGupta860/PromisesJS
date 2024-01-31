const promise1 = new Promise((resolve) => {
    setTimeout(resolve,500,"One");
})

const promise2 = new Promise((resolve) => {
    setTimeout(resolve,100,"Two");
})

Promise.race([promise1,promise2]).then((value) => {
console.log(value);
})