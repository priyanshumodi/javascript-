const user = {
    username : "krishna",
    welcomeMessage : function () {
        console.log("welcome :",this.username);
        // console.log(this);
    }
   
}
// user.welcomeMessage();
// user.username = "priyanshu";
// user.welcomeMessage();

// console.log(this); // output is {} blank it simply related to class in javaScript we call it object

// function chai() {
//     let username = "krishna"
//     console.log(this.username);
// }

// chai();

// const chai = function() {
//     let username = "krishna"
//     console.log(this.username);
// }
// chai();

// const chai = () => { // arrow function is here 
//     let username = "krishna"
//     console.log(this.username);
// }
// chai();

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// if we are using {} curly brases then we need to write return otherwise no

// const addTwo = (num1,num2) => num1 + num2;
// const addTwo = (num1,num2) => (num1 + num2);
const addTwo = (num1,num2) => ({username: "priyanshu"});

console.log(addTwo(3,4));