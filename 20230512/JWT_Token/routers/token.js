// jsonwebtoken 설치

// dotenv 설치
// npm i jsonwebtoken dotenv

const router = require("express").Router();

// .env의 파일을 읽고 현재 프로세서에서 엑세스 할 수 있도록 환경 변수로 설정한다.
const dot = require("dotenv").config();


const jwt = require("jsonwebtoken");
const { route } = require("./page");

router.post("/login",(req,res)=>{

    const name = "soon";
    
    // process.env 는 유저의 환경을 담은 객체를 return 하는것임
    // process.env.KEY 이라는것은 내가 KEY라는 것을 .env 파일에 정의했는데 객체중 KEY를 리턴 해서 const key에 담는다는거임
    const key = process.env.KEY

    //sign 메서드는 JWT 토큰을 생성하는 메서드 이고
    // 토큰을 생성할 때는 첫번째 매개변수 는 헤더
    // 두번째는 key
    // 세번째는 payload(전달할 데이터)
    let token = jwt.sign({

        //토큰 타입
        type : "JWT",
        name : name,
    },
    
    key,{
        // 토큰의 유효시간
        expiresIn : "3m",
        // 토큰 발급자
        issuer : name

    })

    // 서버에 대한 post 요청에서 로그인 자격 증명을 제공할 수 있는데,
    // 서버가 사용자를 성공적으로 인증하면 생성한 토큰을 세션.토큰에 담는다.
    req.session.token = token;
    res.render("page2");
});



// 다른 곳에 로그인했으면 로그인을 중복 로그인을 방지해주자
// 데이터베이스에 엑세스 토큰을 저장하고
// 로그인을 하면 엑세스토큰을 갱신 시켜주는 작업

module.exports = router;