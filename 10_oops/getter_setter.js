class User {
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    set username(value) {
        this.username_ = value;
    }

    get username() {
        return this.username_.toUpperCase();
    }

    get password() {
        return `${this._password} Krishna`;
    }

    set password(value) {
        this._password = value
    }
}
const user = new User("Krishna","123");
console.log(user.password)
console.log(user.username_)