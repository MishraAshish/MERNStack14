// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

//different animal sound
let cat = "Miaow", // if we put comma we don't need to use let again and it will continue as let till semicolon ;
dog = "Woof",
bird = "Chirp",
lion = "roar";

let AnimalSounds = {
     cat : cat,
     dog : dog,
     bird : bird,
     lion : lion
}

// if the key and the value from the variable we read are same then ue just one without :
let AnimalSoundsES6 = { cat, dog, bird, lion }

//console.log(AnimalSounds)
//console.log(AnimalSoundsES6)
//console.log(typeof AnimalSoundsES6.cat)

console.log("Animal sound object in JS "+ AnimalSounds) //AnimalSounds.toString() [object object]
console.log("Animal sound object in JS "+ JSON.stringify(AnimalSounds))

console.log("Animal sound object in ES6 ", AnimalSoundsES6) //using , in console log works as JSON.stringify


//create vehicle object with different ratings

module.exports = {
    AnimalSounds, AnimalSoundsES6
}