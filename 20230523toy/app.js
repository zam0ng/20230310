// npm i express mysql2 ejs express-session jsonwebtoken dotenv sequelize

const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const dot = require("dotenv").config();
const {sequelize,User} = require("./models"); //
const {adminsignup} = require("./controller/admin");

const signupRouter = require("./routers/signup");
const loginRouter = require("./routers/login");
const agreeRouter = require("./routers/agree");
const borderRouter = require("./routers/border");
const insertRouter = require("./routers/insert");

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:false}));

// 테이블을 여기서 만든다.
sequelize.sync({force:false}).then((e)=>{
    // console.log(e);
    console.log("연결 성공")
    adminsignup(User);
}).catch((err)=>{
    console.log(err);
})

app.use(session({

    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false,
    
}))

app.use('/signup',signupRouter);
app.use("/login",loginRouter);
app.use("/agree",agreeRouter);
app.use("/border",borderRouter);
app.use("/insert",insertRouter);


app.listen(3030,()=>{
    console.log("server on");
})

