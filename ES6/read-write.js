let fs = require("fs");


//console.log("File system starts")

//blocking or synchronous 
//let fileData = fs.readFileSync("./promise.js","utf-8") //IO operation
//console.log(fileData);


//non-blocking or asynchronous 
//fs.readFile("./promise.js","utf-8",(errr, data)=>{ console.log(data); console.log(errr)}) //IO operation

//console.log("File system ends")


// //ReadFile using streams 
// let readerStream = fs.createReadStream("./class.js","utf8");
// let data = "";

// readerStream.on("data",(chunks)=>{
// //    console.log("chunks ", chunks)
//     data = data + chunks
// })

// readerStream.on("end",()=>{
//     console.log("end ", data);
// })

// readerStream.on("error",(erroObj)=>{
//     console.log("error ", erroObj)
// })

// console.log("Read File using reader stream end");


//Writing into a file using write stream

let userDetails = {
    name : "Tegdeep",
    age : 22,
    city : "California",
    session : "MernStack"
}

let writerStream = fs.createWriteStream("./Text.json","utf8");

writerStream.write(JSON.stringify(userDetails));
writerStream.end();


writerStream.on("finish", ()=>{ //attached an event from eventemitter class
    console.log("Writing into the file is done")

    fs.readFile('./Text.json','utf8',(err, fileData)=>{ //error first call back : error will always be a first object when executes with node modules

        console.log("err", err);
        console.log(JSON.parse(fileData));
    
    });
})

writerStream.on("error",(erroObj)=>{
    console.log(erroObj)
})
console.log("Read File Ends Using Writer Stream");


//save the data in json object that are making MERN stack and MEAN stack as acronym
//write using writestream and also read and print using readtream upon finish
//expand it like - M-Mongo, E-Express, R-React and N-Node in JSON format