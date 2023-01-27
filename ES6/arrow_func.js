// arrow functions or fat arrow functions are lambda expressions that help us with below stuffs
// 1. Ease of writing a function - ()=>{}
function add(a,b) { 
    return a+b
}
//console.log(add(5,5))

//let add_arrw = (a,b)=>a+b //if we return in same line we dnt need return statement, and curly brackets {}

let add_arrw = (a,b)=>{
            return `Added Sum is : ${a+b}`
        }
//console.log(add_arrw(5,5))

// 2. Resolves the function context by copying context of immediate parent

let User = {
    Name : "Micheal",
    Session : "MERNStack",
    GetUserDetails : function() {
        console.log(`Details are - ${this.Name} and ${this.Session}`)
        //console.log("Outer Context - ", this)
        
        let that = this;//copying the context to - that

        // setTimeout(function(){
        //     //console.log(`Details are - ${this.Name} and ${this.Session}`) //context is settimeout and it doesn't have Name and Session
        //     console.log("Inner Context - ", this)
        //     console.log(`Details are - ${that.Name} and ${that.Session}`)
        // }, 2000);

        //settimeout resolves the function context by copying context of immediate parent into current function
        setTimeout(() => {
            console.log(`Details are - ${this.Name} and ${this.Session}`) 
            console.log("Inner Context - ", this)
        }, 2000);
    }
}

User.GetUserDetails()



// Create a Student Object with a couple of properties and a function - printStudent, implement arrow function in setTimeout