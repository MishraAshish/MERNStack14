//Each File in JS is termed as module

//Object Literals
var FirstUser = {
    fName : "First User",
    lName : "First User Last",
    getUserDetail : function (params) {
        return {Name : this.fName + this.lName}
    }
}

var SecondUser = {
    fName : "SecondUser User",
    lName : "SecondUser User Last",
    getUserLastName : function (params) {
        return {Name : this.lName}
    }
}

console.log(FirstUser.getUserDetail())

// module.exports = {
//         SecondUser : SecondUser, //we can replace this with short hand
//         FirstUser : FirstUser
//     }

module.exports = { SecondUser, FirstUser}