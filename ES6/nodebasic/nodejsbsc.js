const { log } = require('console')
const os = require('os')
const path = require('path') //will be helpful to rectify the correct path to file or directory
const util = require('util')
const v8 = require("v8")//gives access to V8 engine of node

const fs = require('fs');//file system module is used to give us ways to work with files

const { readFile } = require('fs').promises
const readFilePromise = util.promisify(readFile)
// readFilePromise - returns us a promise object to readfile in async way
// readFile in this case is also a promise intent
readFile("../forINforOF.js","utf-8").then((data, err)=>{ log(data); log(err) })


const cpuCount = os.cpus().length
log("CPU Count ", cpuCount)

log("Logging using console log from console module!!")


//utility module
// util.log(path.basename(__filename))
// util.log("path.basename(__filename)")

// util.log(v8.getHeapSnapshot())
// util.log(v8.getHeapStatistics())

// log(__filename)
// log(path.basename(__filename))
// log(__dirname)
// log(path.basename(__dirname))

// log(v8.getHeapSnapshot())
// log(v8.getHeapStatistics())


// process.stdin.on('data', data =>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
//     process.exit();
// })

// process.stdin.on('exit', data =>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
// })

//process.nextTick(()=>{log("Next Tick Called!!")}) //defering the execution using tick

// let myInterval = setInterval(() => {
//     console.log("Test Me")
//     clearInterval(myInterval)
// }, 500);


// console.log(os.userInfo());
// console.log(os.hostname());
// console.log(os.release());