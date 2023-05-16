// npm init -y
// npm i mysql2 ejs express

const express = require("express");

const app = express();

const path = require("path");

const router = require("./route/user");

const session= require("express-session");
const dot = require("dotenv").config();
app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized :false,
}))
app.set("views",path.join(__dirname,"page"));

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));
// css 적용하는법
app.use("/css",express.static(path.join(__dirname,"public/css")));
app.use("/img",express.static(path.join(__dirname,"public/img")));
app.use("/upload", express.static(path.join(__dirname,"upload")));

app.use("/",router);


const mysql = require("./model/config");



app.listen(3000,()=>{
    console.log("서버 잘열림");
})

