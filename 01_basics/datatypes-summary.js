// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(anotherId);

console.log(id === anotherId)

const bigNumber = 3433489548593485943859438494898n;
console.log(bigNumber)

//  Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Krishna","radha","sudama"]
let myObj = {
    name:"krishna",
    age: 45
}

console.log(heros);
console.log(myObj.name);

const myFunction = function(){
    console.log("jai shree Krishna");
}

console.log(typeof bigNumber); //agar variable nhi mila to undefined
myFunction();
console.log(typeof myFunction); //object function

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ***************************************************

// stack (primitive), Heap (Non-Primitive)

let myYoutubename = "krishnaradhe.com"

let anotherName = myYoutubename;
anotherName = "chai aur code"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    name:"krishna",
    age:45
}

console.log(userOne);

let userTwo = userOne

userTwo.name="radha"

console.log(userTwo);

// hence stack work on pass by value and 
// heap works on pass by reference
