// callBack and callback hell - too much of call backs if one call back fails then other enter a infinite loop

// function SigninSignUp(AuthenticationCallback, AuthorizationCallback, NavigationCallback) {
//     let ValidUser =  AuthenticationCallback(userid, password, AuthorizationCallback); //making a server call - ajax (in async)
//         if (ValidUser) {
//             let userRole = AuthorizationCallback(ValidUser, NavigationCallback); //making a server call - ajax (in async)            
//             //userRole.whatisTheOutput //success or failed -- promise
//             if (userRole) { 
//                 let nextPage = NavigationCallback(userRole) //making a server call - ajax (in async)
//             } else {
//                 //check again for the user validity
//                 SigninSignUp(...callbacks);
//             }
//         } else {
//             //send him on forgot password 
//         }
// }

// SigninSignUp(AuthenticationFunc, AuthorizationFunc, NavigationFunc)
// function AuthenticationFunc(params) {} //use and make call to auth api's
// function AuthorizationFunc(params) {} //use and make call to auth api's
// function NavigationFunc(params) {} // valid screens for user with given role


//Promises : These are the proxy objects that give us a control to check the status of promise and 
// upon revelant status we also get the type, payload associated with that in response
// promise will have 3 states - pending, fullfilled/resolved (then), rejected (catch)


let SiginSingUpPromise = new Promise((resolved, rejected)=>{

        //a call to API, here we'll be using set-timeout to illustrate the wait

        setTimeout(() => { //as authentication call to authapi
            // resolved({
            //     status : "Signed In Successfully",
            //     code : 200,
            //     userId : 225,
            //     token : "d34sa3d435sa4d"
            // })

            rejected({
                status : "Signed In Failure",
                code : 404,
                userId : null,
                token : ""
            })
        }, 2000);//2 seconds call to server

})

console.log("Promise is initiated")

console.log("Promise status ", SiginSingUpPromise)

SiginSingUpPromise.then((data, err)=>{ // success or resolved state of the promise
    console.log("data - resolved", data)
}).catch((data, error)=>{
    console.log("data - rejected", data)
})

console.log("Promise is complete")


// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing