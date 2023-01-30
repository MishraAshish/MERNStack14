// async and await - to give us a synchronised behaviour of execution though executing asynchronously
// if we create promise object inside async it will take it or if we dont create promise then it will wrap a promise object
// async and await : //Async : A way to have multi-threading in javascript like other object oriented programming language

// fetch user - call
// fetch product - call
// fetch stores - call

// main()
// - async1 -> thread -> main/stack
// - async2 -> thread2 -> main/stack
// - async3 -> thread3 -> main/stack


function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
            // setTimeout(() => {
            //     resolve({
            //         "statuscode" : 200,
            //         "statusmsg" :'resolved'
            //         });
            // }, 2000);

            setTimeout(() => {
                resolve({
                    "statuscode" : 400,
                    "statusmsg" :'rejected'
                    });
            }, 2000);
    });
}

console.log("async Execution starts");

async function asyncCall() {

    console.log("Before await");

    //await is used to set the call/promise in a separate thread
    await resolveAfter2Seconds()
          .then((data)=>{ console.log("data ", data) })
          .catch((err)=>{ console.log("err ", err) })

    console.log("After await");

    console.log("Before await 2");

    //await is used to set the call/promise in a separate thread
    await resolveAfter2Seconds()
          .then((data)=>{ console.log("data ", data) })
          .catch((err)=>{ console.log("err ", err) })

    console.log("After await 2");

}

asyncCall();

console.log("async Execution ends");


//create async function for fetching user account details