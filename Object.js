//Objects : Are the basics building blocks in Javascript with many predefined functions to be used at various fetures
//Objects mainely are key value pair and can be used to create a class structure
//Creating an object
//new Object({}), Object.create({})

var User = {
    name : "Pavani",
    address : "Somewhere in US",
    getUserDetails : function () {
            return {
                name : this.name,
                address : this.address 
            }
    }
}
//console.log(User.getUserDetails())

//Inheritance of JS Object
//1. Using new keyword : It clones the base object so we should avoid using the same to have inheritance
// var Employee = new Object(User);//creating extension from User
// Employee.name = "Carlos";
// Employee.session = "MERNSTack";
// console.log(Employee.getUserDetails())

// Employee.getSession = function () { return this.session;}
// console.log(Employee.getSession())
// console.log(User.getSession())//undefined

//2. Using Object.create({})

var Employee = Object.create(User);
Employee.name = "Carlos";
Employee.session = "Object Inheritance using prototype";
//console.log(Employee.getUserDetails())

Employee.getSession = function () { return this.session;}
//console.log(Employee.getSession())
//console.log(User.getSession()) //error

// console.log(Employee.__proto__)
// console.log(User.__proto__)

//3. Even the empty object will have prototype

var emptyObj = {} //Object.create({})
//console.log(emptyObj.__proto__)

//4. if we wish to break the prototype chain
//you need to pass null in your object create constructor

//var nullProtoype =  Object.create(null);

//console.log(nullProtoype.__proto__)

//5. Merging multiple objects

var obj1 = {name : "MyName", age : 29, salary : 250}
var obj2 = {name : "YourName", address:"New City ", skills : "Javascript"}
var obj3 = {name : "MyName3", session:"MERNStack"}

//var obj3 = { obj1, obj2 }
//obj1.newProp  = "Sdasdaasd"; //preservation of immutability is not happening
//console.log(obj3)

Object.assign(obj3, obj2, obj1)
//obj1.newProp  = "Sdasdaasd"; //preservation of immutability is happening
console.log(obj3)