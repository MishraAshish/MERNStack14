// var identifier = undefined
//function PrintName = definition of the function

//Hoisting - is a phenomenon where JS compiler reads all variables and functions pulls them on top of file or function
// assigns them respective default values, that way we can access the variable/function even before its declaration
// a reason to say javascript is a compiled language

//1.  creates the snapshot on top of the file and function
//2.  variables - undefined
//3.  functions - function definition

console.log(identifier); // undefined - default value of var, gets hoisted

var identifier = "Some Value"

console.log(identifier);

console.log(PrintName()) //functions gets hoisted with its definition as default value

function PrintName() {
    console.log("The Name")
    return 0
}

console.log(PrintName())

console.log(funcExpression) // its hoisted with undefined value
//console.log(funcExpression()) // TypeError: funcExpression is not a function

var funcExpression = function () {
    console.log("Function Expression Hoisted!!")
}

funcExpression()


//
var globalVar = "global variable"

function Scope() {
    console.log(globalVar) //hoisted value in a function - undefined

    //var globalVar = "No More Global";
    var localVar = "Local Var";
    
    console.log(globalVar) //No More Global
}

Scope();

//console.log(localVar)