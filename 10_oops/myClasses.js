// ES6

// class user {
//     constructor(username,email,password)
//     {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encrypted(){
//         return `${this.password}abc`
//     }
//     getUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai","@","123")

// console.log(chai.encrypted())
// console.log(chai.getUsername())

// behind the scene by prototype

function user(username,email,password)
{
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.changeName = function() {
    return `${this.username.toUpperCase()}`
}
const tea = new user("krishna","krish","124");
console.log(tea.changeName());