console.log("This will be the entry point of my node api")

const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hello', function (req, res) {
    res.send(`<h1>Welcome to the world of ExpressJS and NODEMON as dev depedency</h1>`)
  })

  
app.get('/name', function (req, res) {
    const _name = req.query["name"]

    res.send(`<h1>Name is ${ _name }</h1>`)
    })


app.listen(3000)

console.log("express is listening on port localhost:3000")