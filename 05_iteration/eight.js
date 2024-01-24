const arr = [1,2,3,4,5,6]

// const sum = arr.reduce( (result,val)=> result+val,0)

// const sum = arr.reduce(function (acc,curr){
//     console.log(acc + " " + curr);
//     return acc+curr;
// },0)
// console.log(sum)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    }
]

const sum = shoppingCart.reduce( (result,val)=> result+val.price,0)
console.log(sum)