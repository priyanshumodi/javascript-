// array

const myArr = [0,1,2,3,4,5,6,7,8]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4) // Array can have mix datatype
console.log(myArr2[1]);

// Array methods

myArr.push(9);
myArr.push(10);

console.log(myArr);
myArr.pop(); // remove from back

myArr.unshift(9) // it will add on front of the array
myArr.shift() // remove front front

const newArr = myArr.join();

console.log(myArr);
console.log(typeof newArr);//by the use of join array become string datatype

//slice,splice

// in slice it will not include range and give data
const arr = myArr.slice(1,3); 
console.log("myArr",myArr);
console.log(arr);

// in splice it will include range and update data and then give it
const arr1 = myArr.splice(1,3);
console.log("myArr",myArr);
console.log(arr1);

