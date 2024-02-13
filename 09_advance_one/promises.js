const promiseOne = new Promise(function(resolve,reject) {
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("async task is completed");
        resolve();
    },1000)
})

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