class User {
    constructor(username){
        this.username = username;
    }
    printMe() {
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.email = password;
    }
}

const user = new Teacher("krishna","ja","23")
console.log(user.username)

console.log(user instanceof User)