//Function : JS is functional programming language and its power lies in the spirits of functions or variations of functions
//As most of the essential features are built through functions so it is termed as - first class member citizens

//keyword - name of the function - paranthesis - parameters - definition of the function
//function name(params) { 
    //function definition
//}
//pure functions - it should always return a value

//1. Named Function
function NoReturn(a, b) { 
    console.log("This is a named function "+  (a + b) )
    //console.log(this)
};
//console.log(NoReturn(1)); // undefined - if we dont put any return JS will return default value by itself i.e. undefined
NoReturn(1, 2); //function invocation, callingFunction, executing function
NoReturn(2);

//2. IIFE - immediately invocable function expression
//used for single excution, can be used to have singleton pattern
// (function IIFEFunc(sessionName) {
//     console.log("IIFE - immediately invocable function expression executed - ", sessionName)
//     user = {name : "Some thing", place : "Somewhere in us"} // a singlton object of user is created
// })("MERNStack - IIFE");

//IIFEFunc("MERNStack")//function invocation
//console.log(globalThis.user)


//3. Function Expression
var funcExpression = function (a, b) {
    return a + b;
}

//console.log(funcExpression(5,6))

//4. Constructor Function - will be used like a class

function MyClass(fName, lName) {
    this.fName = fName, //this : is context or scope or execution context of a function
    this.lName = lName,
    
    this.getFirstName = function () {
        console.log(this)
        return this.fName;
    }
}

var classFunc = new MyClass("Some Name","Some More Name");
console.log(classFunc.getFirstName()) //context of this function belongs to MyClass coz we're using myclass object to execute

var myClsObj = new MyClass("Jason", "Miller");
console.log(myClsObj.getFirstName());

//5. Nested Functions
// function NestingInFunctions(params) {
//     function FuncA(params) {
//         function FuncB(params) {
//             function FuncC(params) {
    
//             }
//         }
//     }   
// }
