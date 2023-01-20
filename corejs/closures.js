// OOP's fundamentals -
//1. Inheritance - constructor function in es5 and then classes in es6, prototype is the only way
//2. Encapsulation - data hiding can be done through closures, with the help of access modifiers
//3. Polymorphism - Overriding (it supports in function as well in classes) and OverLoading (doesnot support overloading)
//4. Abstraction - Not required in js

// Closures : A phenomenon when we have two nested functions and the parent function returns child one, at the time of return
// child function only return some required properties and others are kep private.

// function Parent(params) {
//     //some properties
//     //    
//     //
//     // properties that are not returned will be called as private
//     function Child(params) {
//         //return the information which you want to make public
//     }   
//     return Child;
// }

function Account(acctNo, acctName) {
    var balance = "$3000";
    var acctType = "Credit";
    var pwdEncrypted = "!@5re98t";//this becomes private
    //var acctName = acctName;
    //var acctNo = acctNo;

    var childFunc = function (isAdmin, hasPwd) {
        var retrunObj = { 
            balance, 
            acctType, 
            acctName, 
            acctNo 
        }
        
        if (hasPwd) {
            return retrunObj;
        } else {
            return "Please input password!!"
        }
    }

    return childFunc;
}

// to access the information
var childObj =  Account("1225456", "Pavani")(true,1) //chain execution
console.log(childObj)
//console.log(childObj(true, true))

var acctObj = Account("248756166", "SynerAdmin");
console.log(acctObj(false, true))

//create a closure for Student function with encapsulating some set of data