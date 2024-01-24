const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const num = myNumber.map( (num) => num+10)
// console.log(num)

const temp = myNumber.map( (num) => num+10).map( (num) => ++num)
console.log(temp);