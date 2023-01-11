//Data Types are used to declare different types of variables or identifiers

//basic types - 
//primitive-types : string, number, boolean, undefined, null
//non-primitive type : Object

//undefined, null, string, number, boolean, object

console.log("Datatype is "+ dataType)//before declaration //undefined //hoisting

var dataType = "MERNStack Session"

console.log("Datatype is "+ typeof dataType); //string

dataType = 500000000000.5
console.log("Datatype is "+ typeof dataType); //number


dataType = 1 == "1" // == (checks the value) , === (value + dataType)
console.log("Datatype is "+ typeof dataType); //boolean
console.log("Datatype is "+ dataType); //boolean

dataType = undefined //this is the default value
console.log("Datatype is "+ typeof dataType); //undefined
console.log("Datatype is "+ dataType); //undefined

dataType = null
console.log("Datatype is "+ typeof dataType); //object
console.log("Datatype is "+ dataType); //null

//{} //new Object({})
dataType =  {
    sessionName : "Core Javascript"
}

console.log("Datatype is "+ typeof dataType); //object
console.log("Datatype is "+ dataType);
console.log("Datatype is ", dataType);
console.log("Datatype is "+ JSON.stringify(dataType));


//symbol data introduced in ES6
var mySym = Symbol("New Value");
console.log("Symbol ", mySym);
console.log("TypeOf Symbol ", typeof mySym);