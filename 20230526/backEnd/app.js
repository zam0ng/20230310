// 로그인 페이지
// 복습
// 폴더를 나눠서
// 배포를 해서 프론트를 수정하면 프론트에만 푸쉬
// 백엔드를 수정하면 백에만 푸쉬

// 프로젝트 관리
// 벡엔드랑 프론트랑 나눠서 깃 레퍼지토리 파놓고 푸쉬

// express express-session cors sequelize mysql2 dotenv
// 프로젝트 시작 package.json
// 서버 대기상태
// body 객체 사용

const express = require("express");
const cors = require("cors");
const dot = require("dotenv").config();
const session = require("express-session");
const {sequelize}= require("./models");
const app = express();
const loginRouter = require("./routers/login");
const signupRouter = require("./routers/signup");
const insertRouter = require("./routers/insert");
const viewRouter = require("./routers/view");
const mypageRouter = require("./routers/mypage");
app.use(session({

    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized :false,

}))

sequelize.sync({force:false}).then(()=>{
    console.log("연결 성공");
}).catch((error)=>{
    console.log(error);
})
app.use(express.urlencoded({extended:false}));

// 다른 도메인에서 악의적으로 접근할 수 없도록
// 도메인 접근시 발생하는 보안 정책
// 다른 도메인과 통신을 안전하게 유지 시키기 위해서 보안 정책이 있다.
// cors 모듈을 가지고 도메인을 허용 해주자
// Access-control-Allow-origin을 헤더에 포함해서 
// 접근을 허용하고 응답하고 브라우저에서 응답을 받은 뒤
// 헤더값을 확인해서 접근을 허용 또는 차단한다.

// 미들웨어로 추가
app.use(cors({
    // 도메인 허용 옵션
    // 접근을 허용할 도메인
    // 여러개의 도메인을 허용하고 싶다 배열의 형태로 넣어주며 된다.
    // origin : ["http://127.0.0.1:5500",""]
    origin : "http://127.0.0.1:5500",

    //클라이언트의 요청에 쿠키를 포함할지의 속성
    credentials : true,
}))

app.get("/",(req,res)=>{
    res.send("응답함");
})

app.use('/signUp',signupRouter);
app.use('/login',loginRouter);
app.use('/insert',insertRouter);
app.use('/view',viewRouter);
app.use('/mypage',mypageRouter);

app.listen(8090,()=>{
    console.log("server on");
})