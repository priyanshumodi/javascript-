const name = "krishna"
const repoCount = 50

// console.log(name + repoCount + "value"); this is bad practice

console.log(`'hello my name is ${name} and my repo count is ${repoCount}'`);

const gameName = new String('Krishnarrrr')

console.log(gameName[0]);
console.log(gameName.__proto__);// __proto__ is object of string

console.log(gameName.length);
console.log(gameName.toUpperCase()); // it will not change on string
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4);//it will always start from 0
console.log(newString);

const anotherString = gameName.slice(-9,4);//if you give negative then it will count from back
console.log(anotherString);

const newStringOne = "    Krishna      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://krishna.com/krishna%20radhe";

console.log(url.replace('%20','-'));

console.log(url.includes('radha'));

const str = "priyanshu-Modi"
console.log(str.split('-'));