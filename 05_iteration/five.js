const coding = ["java","c","cpp","python"]

// coding.forEach(element => {
//     console.log(element);
// });

// callBack function that's why no name
// coding.forEach(function (item) {
//     console.log(item);
// })

// function print(item) {
//     console.log(item);
// }

// coding.forEach(print)

// coding.forEach( (val,index,arr) => {
//     console.log(val,index,arr);
// })

const myCoding = [
    {
        language : "java",
        symbol : "java"
    },
    {
        language : "cpp",
        symbol : "c++"
    },
    {
        language : "python",
        symbol : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language);
})