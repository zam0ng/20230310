// npm i express express-session bcrypt multer mysql2 dotenv

const express = require("express");
const dot = require("dotenv").config();
const { sequelize } = require("./models");
const path = require("path");
const session = require("express-session");
const cors = require("cors");
const app = express();


const signuprouter = require("./routers/signup");
const loginrouter = require("./routers/login");
const imgrouter = require("./routers/upload");

app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false,
}))


sequelize.sync({force:false}).then(()=>{
    console.log("연결 성공");
}).catch((err)=>{
    console.log(err);
})

app.use(express.urlencoded({extended:false}));
app.use("qwer",express.static(path.join(__dirname,"uploads")))

app.use(cors({

    origin : "http://127.0.0.1:5500",

    // 쿠키허용
    credentials : true,

    
}))

app.use('/signup',signuprouter);
app.use('/login',loginrouter);
app.use('/upload',imgrouter);

app.listen(8090,()=>{
    console.log("Server on");
})