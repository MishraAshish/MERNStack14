// A generator function is a function that can be yeilded as many times as possible upon single invocation

//Generator Functions: Allows us to get multiple yields (or kind of returns) for the indefinite number of times
// without creating and invocation of the function

// function name(params) {
    
// }
// let returnVal = name();
// let returnVal1 = name();
// let returnVal2 = name();

//yield

function *PrintData(num) {

    //do any async operation to read the value
    let updatedValue = 300;//fetch from server

    //here we can call other days stats
    yield num+updatedValue;

    yield num-updatedValue;
    
    yield num*updatedValue;
    
    yield num/updatedValue;

    yield "Last Yeilded Value";

    return "something retuned" //returned true

    yield "Last Yield";
}

let printGeneratorFunc = PrintData(50);

console.log(printGeneratorFunc.next())
console.log(printGeneratorFunc.next())
console.log(printGeneratorFunc.next())
console.log(printGeneratorFunc.next())
console.log(printGeneratorFunc.next())
console.log(printGeneratorFunc.next())

//after return no more yield possible
console.log(printGeneratorFunc.next())



//arithmaticCalculator using - generator function - (a,b), 
//add, subtract, multiply, divide - all this we need to yield

//Arithmatic Calculator
function *arithmetic(num1, num2){
    
    yield console.log("Addition : " + (num1+num2));
    yield console.log("Subtraction : " + (num1-num2));
    yield console.log("Multiply : " + (num1*num2));
    yield console.log("Division : " + (num1/num2));
    
    return "Done";
}
// let calObj = arithmetic(6,2);

calObj.next()
calObj.next()
calObj.next()
calObj.next()
console.log(calObj.next())
console.log(calObj.next())