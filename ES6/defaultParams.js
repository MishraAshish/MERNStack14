//default parameters are used to  initialize the parameters in  functions

function Add(a = 0 , b = 0) { //default param
    //console.log(b)//undefined //5+undefined = NaN - not a number
    return a+b;
}


console.log(Add(5))

console.log(Add(0,6))
console.log(Add(6,6))