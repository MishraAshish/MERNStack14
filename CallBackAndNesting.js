// A function can be passed as parameter with its scope to another function and executed 
// their is termed as callback function 

function Behaviour(callBack, isGreater, name) {
        isGreater ? 
            callBack(name) : 
        console.log("No Name Present!!!")
    
}

function func(name) {
    console.log(name);
}
Behaviour(func, true, "Alexandar")
Behaviour(func, true, "Pavani")

function Add(p1, p2) {
    return p1 + p2;
}

function Multiply(p1, p2) {
    return p1 * p2;
}


function ArithmaticOperations(callBack, p1, p2) {
    return callBack(p1,p2)
}

console.log(ArithmaticOperations(Add, 5, 6))
console.log(ArithmaticOperations(Multiply, 5, 6))


//setTimeout(setimeoutCb, 2000);

function setimeoutCb() {
    //will have the context of settime out
    console.log("this - ", this)
    console.log("Call back function in set timeout")
}


// nested functions do hold the scope of outerfunctions variables or properties 
//javascript currying
var e = 15; //global scope 

function sum1(a){

  return function sum2(b){

    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var totalSum = sum1(2)(3)(4) //chain execution
console.log(totalSum(5))


//function to generate different details of an account using callback function
//like - account balance and account details