const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 4
// console.log(Math.PI)

const chai = {
    name : "adhrak chai",
    price : 250,
    isAvailable : true,
    orderchai: function() {
        console.log("chai lo chai")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// Object.defineProperty(chai,'name', {
//     writable : false,
//     enumerable : false
// })

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for(let [key,value] of Object.entries(chai))
{
    if(typeof value !== 'function')
    console.log(`${key} and ${value}`)
}