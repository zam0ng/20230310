// 이미지 업로드
// 서버측 컴퓨터 폴더에 이미지 파일을 저장
// 파일의 경로를 설정하고 서버측에서 이미지 파일을 가져와서 보여준다.


// npm i express path multer
// multer 모듈을 사용해서 이미지 업로드할것. 파일이 저장될 경로나 파일의 확장자
// 이름 등을 설정해서 파일을 저장한다.

// 프로젝트 시작 package.json
// 서버 대기상태
// 모듈 설치

const express = require("express");
const cors = require("cors");
const uploadRouter = require("./routers/upload");
const path = require("path");
const app = express();


app.use(express.urlencoded({extended:false}));
app.use("/img",express.static(path.join(__dirname,"uploads")));
//cors 도메인 허용 하기위해서
//맨뒤에 / 지우기
app.use(cors({
    origin : "http://127.0.0.1:5500",
    // 요청에서 쿠키를 포함시킬지
    credentials : true,
}))

// 요청과 응답에서 json 형식의 데이터를 전달받았을 때
// 요청과 응답에서 json 파싱을 해서 자바스크립트 객체로 변환 시켜주는 미들웨어
// json메서드로 json 파싱
app.use(express.json());
app.use("/upload",uploadRouter);



app.listen(8080,()=>{
    console.log("Server on");
})