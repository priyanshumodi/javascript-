const promiseOne = new Promise(function(resolve,reject) {
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("async task is completed");
        resolve();
    },1000)
})
// console.log(promiseOne)

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    
    setTimeout(function(){
        console.log("jai ho");
        resolve();
    },1000)
}).then(function(){
    console.log("promise 2 completed");
})

const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("promise three");
        resolve({name: "priyanshu",email:"priynashu.modi@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;

        if(!error){
            resolve({username:"Krishna",email:"Krishna@gmail.com"})
        }
        else{
            reject('Error: Something Went to be Wrong');
            // reject({user:'Error: Something Went to be Wrong'});
        }

    },1000)

})
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username)
})
.catch(function(user){
    console.log(user);
})
.finally(function(){
    console.log("kuch bhi ho me to chalunga hi")
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = !false;

        if(!error){
            resolve({username:"javaScript",password:"Krishna@123"})
        }
        else{
            reject('Error: Something Went to be Wrong');
            // reject({user:'Error: Something Went to be Wrong'});
        }
    },1000)
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(user){
        console.log(user)
    }
}

consumePromiseFive()


// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);
//     const data = await response.json(); // response contain data in form of string we have to change in 
//                                         // json for access and it can also take time that's why await is used
//     console.log(data)
//     }
//     catch(e) {
//         console.log("E: ",e);
//     }
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {return response.json()})
.then((data) => console.log(data))
.catch((error) => console.log("error: ",error))