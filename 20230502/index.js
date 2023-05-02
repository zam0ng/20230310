// http 요청과 응답을 좀더 편하게 사용할 수 있도록 도와주는 모듈
// express nodejs에서 제일 인기가 많은 모듈
// nodejs 프레임워크
// http요청과 응답을 더 쉽게 작성할 수 있도록 도와준다
// 자유도 높고 라우팅 미들웨어 등등 개발자가 원하는 방식으로 구성할 수 있다.
// 본인만의 보일러 플레이팅이 가능하다.
// 보일러 플레이팅은 반복적인 작업을 피할 수 있도록 미리 개발자 작성을 하고
// 생산성을 향상 시킬 수 있다.

// 프로젝트 시작할 때
// npm init -y 부터 하는게 좋다.

// express를 사용해보자
// 설치 명령어
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// npm i express or npm install express
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const express = require("express");

// 서버 객체가 생성
const app = express();

// 메소드를 사용해서
// 요청의 내용이 get메소드인지 post 메소드인지
// app.get()
// app.post()

// 우리가 어제 한내용
// http.createServer((req,res)=>{

// })


app.get("/",(req,res)=>{

    //send 메소드로 응답하고 종료
    res.send("hello nodejs")

});

app.listen(5000,()=>{

    console.log("서버 잘 열림");
});

// pacakge.json 의 script 명령어에서 설정할 수 있는데
// "start": "node index.js", 는 npm start로 실행할 수 있는데
// "dev" : "node index.js" 는 npm run dev로 실행해야 한다.