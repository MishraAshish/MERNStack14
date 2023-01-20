//In Javasript we can declare var as variables

//1. var is a functional scope, let and const are block scope (lexical scope) and doesn't support hoisting
function name(params) {
    var myVar = "SomeValue"
}

{
    var lexicalVar = "My Variable"//probles : it doesn't treats {lexical} as boundry
    let lexicalLet = "My Let Variable"// it follows the {} boundry
    const lexicalConst = "My Const Variable"// it follows the {} boundry

    //console.log(lexicalLet);
    //console.log(lexicalConst);
}

//console.log(lexicalVar);
//console.log(lexicalLet);
//console.log(lexicalConst);

//2.  Not hoisting in let and const
//console.log(hoistedLet);
//console.log(hoistedconst);
var hoistedVar = "hoisted var"
let hoistedLet = "hoisted let"
const hoistedconst = "hoisted const"

//3. declarations and assignments
//var : redeclaration and re-assignement is possible at any time
var declaredVAr = "Some declared variriable"
var declaredVAr = "Some declared variriable"
declaredVAr = "Some declared variriable"

//let : redeclaration is not possible and re-assignement is possible at any time
let declaredlet = "Some declared let"
//let declaredlet = "Some declared let"
declaredlet = "Some declared let"

//console.log(declaredlet)

//const : redeclaration and re-assignement both are not possible
const declaredconst = "Some declared const"
//const declaredconst = "Some declared const"
//declaredconst = "Some declared let"

//let can be defined and assigned value at later point, but const needs to defined and declare the value at the moment
let newLet;
newLet = "898989"
//console.log(newLet)

// const newConst;
// newConst = "898989"
//console.log(newConst)

//strange point while const is an object >> const as immutable

const User = { name :  "Gia" }

//User = {} // reassignment is not allowed
console.log(User) //

User.name = "Micheal" //Hack : so const itself not allowed to change but the reference to which it is pointing can be changed with object
console.log(User)




//Query : for output of var - functional scope variable
//function - then when you will get the output add(4,5)

// for (var index = 0; index < 5; index++) {
//     setTimeout(function () {
//         console.log("index ", index) //
//     }, 1000);
// }

// console.log("index ", index) //

// for (var index = 0; index < 5; index++) {

//     (function IIFE(params) { //IIFE used to invoke the function get the value from var and assign in settimeout
//         setTimeout(function () {
//             console.log("index ", params) //
//         }, 1000);    
//     })(index)
    
// }

// console.log("index ", index) //


for (let i = 0; i < 5; i++) { //lexical scope variable get evaluated immediately

        setTimeout(function () {
            console.log("index let", i) //
        }, 1000);    
    
}

//console.log("index let", i) //