const express = require("express");



// 로그인 할 때
// JWT 토큰을 사용한다.
// JSON Web Token
// 웹 표준으로 두 객체 으로 가지고 있다.(우리가 필요한 것들 유저 정보같은)
// JWT로 발급한 토큰은 기본정보(유저의 정보 프로필)
// 그리고 토큰이 정상인지 검증(서명을 포함 하고 있다. signature)

// 주로 로그인이 정상적인지 회원 인증 권한에서 사용한다.

// JWT은 유저가 로그인을 요청하면 서버에서 유저의 정보를 가지고
// 정상적인 루트로 로그인을 요청한 유저면 토큰을 발급해서 전달해준다.
// 유저가 서버에 요청을 할 때 JWT 토큰을 포함해서 요청을 하면 서버가 
// 요청을 받고 토큰이 썩은 토큰인지 검사를 해서 착한 토큰이면 유저가 요청한
// 작업을 처리해주고 응답한다.

// JWT를 사용하는 이유는 안정성 있게 정보를 전달해서 요청을 할 수 있다.

// JWT를 생성하면 사용할 모듈이 인코딩과 해싱 작업을 해준다.

// HMAC : 해싱 기법을 적용해서 메시지의 위변조를 방지하는 기법
// SHA256 : 임의의 길이 메시지를 256 비트의 축약된 메시지로 만들어 내는 해시 알고리즘

// JWT의 구조

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// let header ={
//     // 사용하는 해싱 알고리즘
//     alg : "SHA256",

//     //토큰의 타입
//     type : "JWT"
// }

// let payload = {
//     // 토큰의 이름 제목
//     sub : "546534",

//     // 유저의 이름( 유저 프로필 )
//     name : "sadf",

//     // 토큰 발급된 시간 , 발급 된지 얼마나 지났는지
//     lat : "weqrwqr"
    
// }
// //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// // 비밀키 생성
// let signature = HMACSHA256(BASE64URL(header) + BASE64URL(payload));

// header : 타입과 알고리즘의 정보를 가지고 있고,
// payload : 유저의 정보와 만료 기간이 포함된 객체를 가지고 있다.
// signature = header, payload을 인코딩하고 합쳐서 해싱해 비밀키로 만듬.

// 사용할 모듈 express, jsonwebtoken, dotenv

// dotenv 어플리케이션을 만들면서 
// 설정값들을 여기에 작성해준다.
// 보안 민감한 정보를 .env 파일에 설정값들을 작성해둔다.
// 비밀 키, 암호, API 토큰 등등을 저장해놓는다.

// JWT 토큰을 만들건데
// 비밀키를 가지고 토큰을 만들어서 암호화를 시킬 예정
// 그럼 그 비밀키는 탈취가 되면 안된다.

// process.env 객체에 우리가 .env파일에 설정한 이름으로 키값이 들어있다.

const KEY = process.env.KEY;
const path = require("path");
//페이지 부터 만들자.

const app = express();

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:false}));

// jwt 모듈 가져오기
const jwt = require("jsonwebtoken");


//dotenv 모듈 가져오기 가져오면서 config 메소드 실행
// .env 파일을 읽어서 적용
const dot = require("dotenv").con

app.get("/",(req,res)=>{
    res.render("main");
})

app.post("/login",(req,res)=>{
    // 로그인을 정상적으로 했다 가정하고
    // 토큰을 발급
    // 유저 정보는 변수로 만들어 주자.
    const name = "user1";
    const KEY = process.env.KEY;

    // sign 메서드 JWT 토큰을 생성
    // 첫번째 매개변수 헤더객체, 두번째 매개변수 비밀키, 세번째 매개변수 payload 객체
    let token = jwt.sign({

        // 타입은 JWT
        type : "JWT",
        
        //유저 이름
        name : name
    },KEY,{

        // 토큰을 유지시킬 유효시간 만료시간
        // 5분 유지 시킬 토큰
        expiresIn : "5m",
        

        //토큰 발급한 사람
        issuer : "user1"

        
    })

    res.send(JSON.stringify(token));
    // 점으로 구분해서
    // 헤더: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    // payload : eyJ0eXBlIjoiSldUIiwibmFtZSI6InVzZXIxIiwiaWF0IjoxNjgzODU4NTc0LCJleHAiOjE2ODM4NTg4NzQsImlzcyI6InVzZXIxIn0
    // 서명 : 5XmC1qqQFFFepVdtRafd9vQkRoCb4GavsEZh6M8IgFk
    
    //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwibmFtZSI6InVzZXIxIiwiaWF0IjoxNjgzODU4NTc0LCJleHAiOjE2ODM4NTg4NzQsImlzcyI6InVzZXIxIn0.5XmC1qqQFFFepVdtRafd9vQkRoCb4GavsEZh6M8IgFk"
})


app.listen(8000,()=>{
    console.log("서버열림");
})

