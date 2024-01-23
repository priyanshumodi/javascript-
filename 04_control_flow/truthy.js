const userEmail = "Krishna@gmail.com"

//  in this condition assumed to be true

if(userEmail) {
    console.log("got user email");
}
else{
    console.log("not got");
}


// falsy value

// false, 0, -0, BigInt 0n, "",null,undefined,NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length===0)
console.log("to kese hai aap log");

// Nullish Coalescing Operator (??): null undefined

let val
// val = 5 ?? 10;
// val = null??10;
// val = undefined ?? 15;
val = null ?? 10 ?? 15;


console.log(val);

// Terniary Operator

// condition ? true : false;