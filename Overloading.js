//Overloading - same name method with difference in number and type of parameters
// No concept of overloading in JS, instead - over-writing of last define function


Calulate(5)  //

function Calulate() {
    console.log("No Param");
}

Calulate() //

function Calulate(a) {
    console.log("One Param "+ a);
}

Calulate(5, 6) //

function Calulate(a, b) {
    console.log("Two Param "+a + b);
}

Calulate(10) //

//Create a function expression with same name (Calculate) and see the out