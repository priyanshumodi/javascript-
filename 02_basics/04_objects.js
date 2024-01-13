// singleton
// const tinderUser = new Object()

// non singleton
const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"krishna",
    fullname: {
        userfullname: {
            userName: "priyanshu modi",
            userNickName: "tinku"
        }
    }
}
// console.log(regularUser.fullname.userfullname)

const obj1 = {1:'a',2:'b'}
const obj2 = {2:'a',3:'b'}

// const obj3 = {obj1,obj2} //dono sath me print

// const obj3 = Object.assign(obj1,obj2) // first wale parameter me dono value aa jati hai
// const obj3 = Object.assign({},obj1,obj2) // best practice to avoid data lose
// console.log(obj1)

const obj3 = {...obj1,...obj2} // by using spread operator latest and easy for doing same thing as upper
// console.log(obj3);

// array of objects

const user = [
    {
        id:1,
        name:"Priyanshu"
    },
    {
        id:1,
        name:"Priyanshu"
    },
    {
        id:1,
        name:"Priyanshu"
    }
]
// console.log(user[1].name);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName : "javaScript",
    price : "999",
    courseStudent: "Priyanshu"
}

course.courseStudent
// destructuring the objects
const {courseStudent} = course; // batter syntax
console.log(courseStudent);

const {courseStudent:nameStudent} = course; // batter syntax
console.log(nameStudent);

// JSON API

// {
//     "name": "Krishna",
//     "courseName":"JavaScript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]