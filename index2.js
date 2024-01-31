const API_URL = "https://api.github.com/users/AnkitGupta860";

// fetch function is given by browser
// We try catch block for error handling with async and await
async function handlePromise(){
    try{
        const data = await fetch(API_URL);

        const jsonValue = await data.json();

        console.log(jsonValue);

        // fetch() => Response.json() =>jsonValue
    }
    catch(err){
        console.log(err);
    }
}

handlePromise();