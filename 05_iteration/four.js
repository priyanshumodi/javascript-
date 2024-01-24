// object are not iteratable that's why we are using forin

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    java : 'java'
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const key in myObject) {
//     console.log(key);
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js","cpp","java","c"]

// for (const i in programming) {
//    console.log("index "+i+" value "+programming[i]);
// }

// const map = new Map() 
// map.set('IN',"india");
// map.set('usa',"united state america");
// map.set('pak',"pakistan");

// for(const key in map)
// {
//     console.log(key)
// }