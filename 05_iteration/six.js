const coding = ["java","c","cpp","python"]


// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(value);

// filter is used for return a data of for

// const value = coding.filter( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(value);

// const arr = []
// coding.forEach( (item)=> {
//     arr.push(item);
// })
// console.log(arr);

const book = [
    {
        title: 'Book Six',genre : 'fiction',publish: 1987
    },
    {
        title: 'Book Seven',genre : 'history',publish: 2000
    },
    {
        title: 'Book *',genre : 'science',publish: 2002
    }
]

const userBook = book.filter( (bk) => bk.genre==='history')

console.log(userBook);