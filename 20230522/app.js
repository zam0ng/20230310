// 로그인 하고 게시판에 글작성 수정 , 삭제

// package.json
// 설치할 모듈은 express express-session mysql2, ejs dotenv sequelize
// view 엔진경로 설정
// view 엔진 ejs 설정
// body 객체 사용
// 서버 객체 만들고 대기상태


const express = require("express");
const session = require("express-session");
const dot = require("dotenv").config();
const path = require("path");
const app = express();
const {sequelize} = require("./models")

const signUpRouters = require("./routers/signUp");
const loginRouters = require("./routers/login");
const borderRouters = require("./routers/border");

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:false}));
app.use(session({
    // 세션키
    secret : process.env.SESSION_KEY,
    resave : false, // 다시 저장할지 여부
    saveUninitialized : false, // 초기화 할지 여부
}))

//force : 초기화여부
sequelize.sync({force:false}).then((e)=>{
    console.log("연결 성공");
}).catch((err)=>{
    console.log(err);
})

app.use("/signUp",signUpRouters);
app.use("/login",loginRouters);
app.use("/border",borderRouters);

app.listen(8000,()=>{
    console.log("Server on")
})