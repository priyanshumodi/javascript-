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
console.log(result);

function loginUserMessage(username="radha")
{
    if(!username)
    {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("krishna"));