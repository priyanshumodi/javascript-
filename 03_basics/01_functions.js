function sayMyName()
{
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("n");
    console.log("a");
}

// sayMyName();// sayMyName is reference and () is excecution

// function addTwoNumbers(num1,num2)
// {
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1,num2)
{
    return num1+num2;
}
let result = addTwoNumbers(3,4);
// console.log(result);

function loginUserMessage(username="radha") // argument pass nhi kiya to radha
{
    if(!username)
    {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("krishna"));

function calculateCartPrice(val1,val2,...num1) { // rest and spread orperator
    return num1;
}
console.log(calculateCartPrice(200,400,500));

const user = {
    username: "Krishna",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);

}
// handleObject(user);
handleObject({
    username: "priyanshu",
    prices: 19
})

const myArray = [100,200,300]

function returnSecondValue(arr){
    return arr[1]
}
// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([10,20,30]));