function setUsename(username) {
    this.username = username;
}

function createUser(username,email,password) {
    setUsename.call(this,username)
    this.email = email;
    this.password = password
}

const chai = new createUser("krishna","priyanshu@","krishna@123")

console.log(chai)