let a = 10
const b = 20
var c = 30

// dekho bhiya var kisi rule ko nhi manta primitive hai thoda
if(true){
    let a = 100
    const b = 200
    // let c = 300
    // c=29;
    var c  = 300;
    // console.log("inner a ",a,"inner b ",b);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "krishna"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }

    // console.log(website);
    two();
}
one()

if(true)
{
    const username = "krishna "
    if(true){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// ++++++++++++ interesting hoisting +++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}

addTwo(5) // esa nhi kr sakte
const addTwo = function(num) {
    return num + 2
}

