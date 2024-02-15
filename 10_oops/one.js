const user = {
    username:"krishna",
    loginCount: 8,
    signedIn: true,

    getUserDetails:function(){
        // console.log("Got user Details from database");
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function User(username,loginCount,isLoggedIn)
{
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${username}`)
    }
    
    return this; // implicit call krta hai
}
const userOne = new User('krishna',1,true) // for revising concept remove new keyword
const userTwo = new User("radha",2,true)
// console.log(userTwo)
// console.log(userOne.greeting())
console.log(userOne.constructor)