const express = require("express");
const router = express.Router({}); //caseSensitive: true//casesensitive, restriction
const defaultModel = require("../DataModel/defaultDataModel");

//get, put, post, delete etc

router.get('/default',(req, res)=>{
    console.log(req.query);
    let mongodbObj = new defaultModel(req.query);

    mongodbObj.save((err, data)=>{
        if (err) {
            console.log("err ", err);
            console.log("err while saving");
        } else {
            //_id will be created if it works
            res.send(data)
        }
    })    
})

router.get('/all',(req, res)=>{
    defaultModel.find((err, data)=>{
        if (err) {
            console.log("err ", err);
            console.log("err while fetching");
        } else {
            //_id will be created if it works
            res.send(data)
        }
    })    
})


router.get('/', function (req, res) {
    res.send('Hello World')
  })
  
router.get('/hello', function (req, res) {
    res.send(`<h1>Welcome to the world of ExpressJS and NODEMON as dev depedency</h1>`)
})

router.get('/index', function (req, res) {
    res.sendFile(__dirname+"/Public/index.html")
})

router.get('/name', function (req, res) {
    const _name = req.query["name"]

    res.send(`<h1>Name is ${ _name }</h1>`)
})

//ading parameters passed through query string
router.get('/add', function (req, res) { //http://localhost:3000/add?v1=20&v2=30&v3=50
    const v1 = req.query["v1"]
    const v2 = req.query["v2"]
    const v3 = req.query["v3"]

    res.send(`<h1>Sum is - ${parseInt(v1) + parseInt(v2) }</h1> <h2>Third Query Param is - ${v3 }</h1>`)
})

//passing data in route params
router.get('/routeparam/:v1/:v2/:v3/add', function (req, res) { //http://localhost:3000/routeparam/20/30/50/add
    const v1 = req.params["v1"]
    const v2 = req.params["v2"]
    const v3 = req.params["v3"]

    res.send(`<h1>Sum is - ${parseInt(v1) + parseInt(v2) }</h1> <h2>Third Query Param is - ${v3 }</h1>`)
})
  

module.exports = router;