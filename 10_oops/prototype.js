const myName = "krishna     "


console.log(myName.trueLength)

const myHero = {
    thor:"hammer",
    spiderman:"sling",
    getSpidermanPower:function(){
        console.log(`spider man power ${this.spiderman}`)
    }
}

myHero.getSpidermanPower();
Object.prototype.krishna = function() {
    console.log(`krishna is baap of all hero`)
}

myHero.krishna();

// inheritence
const User = {
    name : "priyanshu",
    email : "priyanshi@"
}

const teacher = {
   makeVideo : true
}

const teachingSupport = {
   isAvailable : false
}

const TASupport = {
    makeAssignment : 'jsAssignment',
    fullTime : true,
    // __proto__:teachingSupport // ye bhi same hai niche wale jese
}
// TASupport.__proto__ = teachingSupport

// modern approch 
Object.setPrototypeOf(TASupport,teachingSupport)

console.log(TASupport.isAvailable)


let krishna = "krishna    "
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`trueLength is ${this.trim().length}`)
}
krishna.trueLength();