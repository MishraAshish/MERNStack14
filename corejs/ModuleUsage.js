// can be imported by using import keyword and also using commonjs pattern of require js

var { SecondUser, FirstUser }= require("./Module");

SecondUser.lName = "Nhi";

console.log(SecondUser.getUserLastName())

FirstUser.lName = " Vu Le";

console.log(FirstUser.getUserDetail())