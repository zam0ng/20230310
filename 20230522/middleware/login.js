const jwt = require("jsonwebtoken");

exports.isLogin = (req,res,next) =>{

    const {access_token} =req.session;

    jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,acc_decoded)=>{

        if(err){
            res.send("다시 로그인");
        }
        else{
            // 토큰이 유효한 동안 로그인이 되어있는것이고
            // 유저의 필요한 정보도 payload 값에 있기때문에 복호화해서 사용 가능하다.
            // 다음 미들웨어 실행
            req.acc_decoded = acc_decoded;
            next();
        }
    })
}