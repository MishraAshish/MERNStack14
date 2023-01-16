//We have a different type of functions that we can use to behave like class and this kind of function definition
//is termed as --> constructor function

var funcAsClass = function(name, age, address){
    //this : is the scope of function in which it executes (this - keyword)
    this.name = name;
    this.age = age;
    this.address = address;

    this.getUserDetails = function (isAdmin) {
        return {
            name : this.name,
            age : this.age,
            session : this.session
        }
    }
}

funcAsClass.prototype.session = "Core Javascript"; //prototype here also allows the extension

var funcObj = new funcAsClass("Mueen",25,"Somewhere on earth!!")

// console.log(`User with detail is ${JSON.stringify(funcObj)}`) //back tick, template literal- ES6
// console.log("User Details ", funcObj) //this converts object from JSON to string
// console.log("User Details "+ funcObj) // tries to convert toString thus returns [object Object] as string


var objOfFuncConstructor = new funcAsClass("Vu Le", 19.6, "Somewhere in US")

console.log(objOfFuncConstructor.address);
console.log(objOfFuncConstructor.getUserDetails())

//using protoype we can add properties in child class or object
objOfFuncConstructor.__proto__.hobbies
objOfFuncConstructor.hobbies = "Reading, Playing Soccer";

objOfFuncConstructor.getHobbies = function (params) {
    console.log("Hobbies are "+ this.hobbies)
}

objOfFuncConstructor.getHobbies()

//override get user details in -objOfFuncConstructor and from this return address as well

objOfFuncConstructor.getUserDetails = function (isAdmin) {
    return {
        name : this.name,
        age : this.age,
        address : this.address
    }
}

objOfFuncConstructor.getUserDetails()


//create a constructor function to print user details add one information using prototype