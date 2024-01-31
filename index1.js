const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved value");  
    },5000);
})

const p2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("Promise Resolved value 2");
    },6000);
})

async function handlePromise(){
    // in async await js engine was waiting for promise to resolve
    console.log("Hello world");
    const a = await p1;
    console.log("Hello JS");
    console.log(a);

    // 'b' promise will execute after promise 'a' it will wait 
    const b = await p2;
    console.log("Hello JS")
    console.log(b);
}

handlePromise();


// function getData() {
//     p.then((res)=>console.log(res));
//     console.log("Hello");
//  }

// getData();