// console.log(2>1)

console.log("2" > 1); // true js converts string to number first
console.log("02" > 1); // should not prefer as typescript dont allow

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// the reason is that an equality check == and comparisons > < >=
// <= work differently.
// Comparisons convert null to a number, treating it as 0.
// thats why (3) null >=0 is true and (1) null is false

 console.log(undefined == 0 );
 console.log(undefined > 0);
 console.log(undefined < 0);

// ===
// this operator is compare datatype as well

console.log("2"===2);
