// By just adding async at the beginning of the function makes this function return a promise. Instead of wrapping it in return new promise.
// async function myfunc() { 
   
//     // To do something asyncronous in here we can use awaite to acutally wait until its resolved. 

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = false;

//     if (!error) {
//         const res = await promise; // Wait until promise is resolved 
//     return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }

    
// }

// myfunc()
//     .then(res => console.log(res))
//     .catch(error => console.log(error));


async function getUsers() {
    // await response of the fetch call 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once its resolved
    const data = await response.json();

    // only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));