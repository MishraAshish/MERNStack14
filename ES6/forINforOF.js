// for in loop - iterates over the property value, basically meant for json objects with - key values

//for in loop  
let person = {fname:"John", lname:"Doe", age:25, address : {}}; 

// for (const key_jason in person) {
//     console.log(`key - ${key_jason}`)

//     if (Object.hasOwnProperty.call(person, key_jason)) {
//         const element = person[key_jason];
//         console.log(element)
//     }
// }

console.log("Other Example") 

let arr = [3,5,7]; //{0:3,1:5,2:7,fooKey:"Mehejabeen"}
//arr[3] = 9 , arr.push(10)
arr.fooKey = "Pavani"
//console.log(arr);

// for (const num in arr) {
//     console.log("key or property value ", num)
//         const element = arr[num];
//         console.log(element)
// }


//for of loop :Mainely for arrays, iterates over the property names, more recommended for array of numbers or string instead of objects

console.log("For Of Loop") 
let cars = ['BMW', 'Volvo', 'Mini']; 
cars[3] = ["Toyota"]
cars.new = ["Toyota"] //string key would not be read 

console.log(cars)
console.log(cars);
for (const car of cars) {
    console.log(" "+ car)
}


//console.log("For Of another example")
var arr2 = [3, 5, 7];
//arr2.hello = 20;
//arr2[3] = 21;

console.log(arr2); 

for (let value of arr2) {
    console.log(value); 
    // logs “3”, “5”, “7” 
}
