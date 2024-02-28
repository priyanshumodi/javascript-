class User {
    constructor(username) {
        this.username = username
    }

    printMe() {
        console.log(`username is ${this.username}`)
    }

    static createId() {
        return `123`;
    }
}

class Priyanshu extends User {
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const user = new User("krishna");
// console.log(user.createId());

const p = new Priyanshu("priya","priyahh")
p.printMe()
console.log(p.createId())