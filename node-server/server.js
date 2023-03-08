const express = require('express') //importing express module with name - express
let port = process.env.PORT || 9000;//use port 9000 unless there exists a preconfigured port 

const cors = require('cors');

let app = express();//instantiating express application 
let defaultRouter = require("./routes/defaultRouter");

let userApp = express();//different express instance
let userRouter = require("./routes/userRouter");

let productApp = express();//different express instance
let productRouter = require("./routes/productRouter");

let cartApp = express();//different express instance
let cartRouter = require("./routes/cartRouter");

app.use(cors());//setting cross origin to top level express api
// serve static files like images css using static middleware
app.use("/static", express.static("public"))

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

app.use("/user", userApp); // localhost:9000/user/signinup
userApp.use("/",userRouter);

app.use("/product", productApp); 
productApp.use("/",productRouter);

app.use("/cart", cartApp); 
cartApp.use("/",cartRouter);

app.use("/", defaultRouter);

//main application hosted to listen on 9000 port
app.listen(port, ()=> console.log(`server is listing as port ${port}`))


//localhost:9000 - api => (microsoft.com)
//localhost:9092 - reactapp => (facebook.com)


//then create everything with name student
//studentcomponent
//studentcontainer
//studentreducer
//studentaction

//server
//studentrouter
//studentdatamodel

//create student detail and show the information on ui