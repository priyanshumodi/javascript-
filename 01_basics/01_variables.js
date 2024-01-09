const accountID = 123;
let accountEmail = "priyanshu@123";
var accountPassword = "1234";
accountCity = "jaipur";

// accountID = 2 // not allowed to do this

// we not use var because it does not support block scope and functional scope
// if we use var so that name variable we cant use anyware in program

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

accountEmail = "krishna@123";
accountPassword = "radha";
accountCity ="vrindavan";


// ek sath likhna hoto

console.table([accountID,accountEmail,accountPassword,accountCity])