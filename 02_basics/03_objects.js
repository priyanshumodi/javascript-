// singleton

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "krishna",
    age : 18,
    [mySym]: "my key",
    location: "jaipur",
    email: "krishnavekunth.com",
    isLoggedIn: false,
    lastLoginDays: ["moday","saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "priyanshu@google.com"
// Object.freeze(JsUser)
JsUser.email = "jai ho"
console.log(JsUser);

// Functions

JsUser.greeting = function() {
    console.log("hello Js user");
}
JsUser.greetingTwo = function() {
    console.log(`hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());