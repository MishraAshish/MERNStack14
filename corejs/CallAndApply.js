// call and apply are the functions present in any function which will help us to decide the run time context of 
// executing function, this way we can associate any object as the run time context (this)

// call - whenever we need to pass parameter we pass it one by one after the object
// apply - we can pass all the parameters as an array after the object

name = "Nhi"

var user = {name : "Test", interest : "Functional Programming"}
var user2 = {name : "Test Second", interest : "Core Programming"}

function GetDetails(type, session) {
    // console.log(this.name)
    // console.log(this.interest)
    // console.log(type)
    // console.log(session)

    console.log(`
        Name is ${this.name}
        Interest is ${this.interest}
        Type is ${type}
        Session is ${session}
    `)
}

//GetDetails(); // every function by default executes on global object

GetDetails.call(user, "Training", "MERNStack","asdsad")
GetDetails.call(user2, "Programming", "Architect","asdsadsa")

//if we have large number of params we can get them like array and pass array as parameters
GetDetails.apply(user2, ["Programming", "Architect","asdsadsa"])


// Apply : is used the same way call is used but, we can pass the parameters in the form of array
// Apply : is the inbuilt method used to change the context of a function at runtime, but it accepts function parameters in array format

var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"}
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"}

function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback} 
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `)

    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}
    `)
}

GetVehicleInfo.apply(BMW, ["Yes","5","4","Yes","US"])
GetVehicleInfo.apply(SomeCar, ["No","3","4","Yes","Unknown"])

//Print student information using call and apply and try to see how we get these functions executed immediatly



var UserInfo = {
    name : "Carlos",
    age : 21,

    getUserInfo : function () {
        // console.log(`
        //     User Name is  - ${this.name}
        //     User Age is  - ${this.age}
        // `)
        // console.log("outer this -", this)

        setTimeout(function () {
            console.log(`
                User Name is  - ${this.name}
                User Age is  - ${this.age}
            `)  
        }.bind(UserInfo), 1000) //bind is responsible to give the context whenever we need not executes immediately like call or apply
    }
}

UserInfo.getUserInfo()
// context of a function is either set by call, apply or bind or is the object over which its executed
//if a function is executed normally func() then its context would be global