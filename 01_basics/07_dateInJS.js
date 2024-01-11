// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(11,0,24);
// let myCreatedDate = new Date(2024,0,11,11,04);
let myCreatedDate = new Date("01-01-2024");
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now() // it also correct syntax for object

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString(`default`,{
    weekday: "long"
    
})