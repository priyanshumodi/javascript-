const maharathi = ["bhishm_pitamah","guru_dhron","ang_raj","pandu_putra"]
const pandav = ["yudhisthir","bhim","arjun","nakul","sahdev"]

// maharathi.push(pandav);

// console.log(maharathi);
// console.log(maharathi[4][2]);

const allHeros = maharathi.concat(pandav);
console.log(allHeros);

const all_new_heros = [...maharathi, ...pandav];
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("Krishna"));
console.log(Array.from("Krishna"));
console.log(Array.from({name: "krishna"})); //interesting

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3));