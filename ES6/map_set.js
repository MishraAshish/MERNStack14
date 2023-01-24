//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

//[{key : "value"}]
let myMap = new Map();

let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "This is the string key")
myMap.set(keyObj, "This is the object key")
myMap.set(keyFunc, "This is the function key")
myMap.set(keyNum, "This is the number key")

// console.log(myMap.get(keyFunc));
// //console.log(myMap.get({}));// undefined

// console.log(myMap.entries());
// console.log(myMap.delete(keyNum));
// console.log(myMap.entries());


//when we need a iterable/collection with unique values
//Set : this maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["Vu Le","Thanh Le", "Mueen", "Tegdeep", "Pavani", "Carlos", "Micheal", "Nhi", "Gia"])
console.log(StudentSet.add("Anant"))


console.log(StudentSet.entries())
console.log(StudentSet.add("Mueen"))//no duplicate values are added

console.log(StudentSet.entries())

console.log(StudentSet.size)