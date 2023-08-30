const express = require("express");

const dot = require("dotenv").config();
const {sequelize} = require("./models")
const app = express();
const path = require("path");
const cors = require("cors");
const session = require("express-session")
const cookieParser = require('cookie-parser');

const signuprouter = require("./routers/signup");
const loginrouter = require("./routers/login");
const boardrouter = require("./routers/board");

app.use(cors({
    origin : ["http://127.0.0.1:3000","http://localhost:3000"],
    credentials :true,

}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

sequelize.sync({force : false})
.then(()=>{
    console.log("database connect !")
}).catch(()=>{
    console.log(err);
})

app.use(
    session({
      secret: process.env.SESSION_KEY,
      resave: false,
      saveUninitialized: false,
    })
);
app.use("/signup",signuprouter);
app.use("/login",loginrouter);
app.use("/board",boardrouter);

app.listen(8080,()=>{
    console.log("Server On");
})
