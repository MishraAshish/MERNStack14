//destructuring is used to create less variables using copy of array or json objects

//a. Array Destructuring
//1. Assiging values without variable initialization
//let names = ["first", "second", "third"]
//let firstName = names[0];
//let secondName = names[1];

//let [firstName, secondName, thirdName] = ["first", "second", "third"];

// console.log(firstName)
// console.log(secondName)
// console.log(thirdName)

//2. Assiging default values 

// let [firstName, secondName, thirdName = "default value"] = ["first", "second" , "third"];
// console.log(firstName)
// console.log(secondName)
// console.log(thirdName)


//3. Rest of the values ...variable (means copying rest of the array)

//not possible let [...number1, number2, number3] = [1,2,3,4,5,6,7,8,9,10]
// let [number1, number2, ...number3] = [1,2,3,4,5,6,7,8,9,10]
    
// console.log(number1)
// console.log(number2)
// console.log(number3)

//4. swapping of variables

// let a = "aa", b ="bb";

// [a,b] =[b,a]
// console.log(a)
// console.log(b)


//(b.) Object destructuring

//1. Normal object destructuring
let User = { name : "Tegdeep", session : "MERNTStack", interest : "Vlogger" }

// let Name = User.name
// let session = User.session
// let productName = Product.name

let {name, session, hobby = "Writing Quotes"} = User
//console.log(name, session, hobby);

//2. Nested object destructuring

let StudentReport = { stdname : "Vu Le", address : "Somewhere in US", 
                        marks : { Math : 85, Physics : 90, Chemistry : 80 } }


let { stdname, address , marks : { Math , Chemistry, English = 75 } } = StudentReport;


console.log(stdname);
console.log(Math);
console.log(Chemistry);
console.log(English);


let { marks : { Physics } } = StudentReport;

console.log("Physics ",Physics);

//question :

let StudentTest = {
    firstname : "Put your name",
    address : " ??",
    sessionTopics : {
        covered1 : "CoreJS",
        covered2 : "OOJS"
    }
}

//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest