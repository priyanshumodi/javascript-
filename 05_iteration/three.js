// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const iterator of object) {
    
// }

for(const index of arr)
{
    console.log(index);
}

// Maps

const map = new Map();
map.set('in',"india");
map.set('USA',"united state of america");
map.set('can',"canada");

console.log(map)

// array destructured
for(const [key,value] of map)
{
    console.log(key + ":-" + value);
}