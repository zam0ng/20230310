// 프로젝트 시작하기
// package.json
// 서버 객체 만들고
// 서버 대기상태
// body 객체 사용

// 세션 사용 (세이브 옵션은 다 false 초기화 옵션 false);

// dotenv 사용
// mysql 2 사용
// view 엔진 경로 사용 view엔진은 ejs
// jwt 토큰 사용


const express = require("express");
const app = express();
const path = require("path");
const jsonwebtoken = require("jsonwebtoken");
const dot = require("dotenv").config();
const mysql2 = require("mysql2");
const session = require("express-session");

const joinRouter = require("./routers/joinRouter");
const loginRouter = require("./routers/loginRouter");

app.set("views",path.join(__dirname,"page"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}))

app.use(session({
    // 세션 발급에 사용할 비밀키 노
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false,
}))

app.use("/join",joinRouter);
app.use("/login",loginRouter);

app.listen(8090,()=>{
    console.log("서버 잘열림"+"8090");
})