const p = new Promise(function (resolve,reject){

    let x = 10;
    if(x==10)
    {
        resolve("OK");
    }
    else{
        reject("Reject");
    }
})

p.then(function(resolve,reject){
    if(resolve)
    {
        console.log(resolve);
    }
    else
    {
        console.log(reject);
    }
})