//Like other programming language we have operators in javascript as well

//&& (and), || (or), !(not), >, <, =, ==, ===, => ....

var validVoter = true;//holds a voter id
var voterAge = "18"; //string

//if (validVoter && voterAge === 18) { //it compares value as well as the data type
if (validVoter && voterAge == 18) { //it only compares values
    console.log("A valid voter, can vote!!")
} else {
    console.log("A InValid voter")
}

//ternary operator

//condition ? "do something when condition is true " : "on condition false"

validVoter && voterAge == 18 ?
    console.log("A valid voter, can vote!!")
    :
    console.log("A InValid voter")


//Ternary Operator
// condition/'s ? "True Case" : "False Case"

//validVoter && Number.isInteger(voterAge) && voterAge >= 18 ? console.log("Valid Voter and can vote") : console.log("InValid Voter and can't vote");