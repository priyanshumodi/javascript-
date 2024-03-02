const User = {
    user1name : "krishna",
    _password : "abc",

    get username() {
       return this.user1name.toUpperCase();
    },

    set username(value) {
        this.user1name = value;
    }
}

const name = Object.create(User);
console.log(name.username);