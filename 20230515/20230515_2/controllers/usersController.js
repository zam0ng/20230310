const {userList, userSelect, userInsert, userPwUpdate, userRefresh, userDelete }= require("../models");
const jwt = require("jsonwebtoken");

exports.UserList = async (req,res)=>{
    try {
        const data = await userList();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// 회원 가입
exports.Signup = async(req,res) =>{

    const {user_id, user_pw} = req.body;
    
    try {
        await userInsert(user_id,user_pw);
        res.redirect("/login");
    } catch (error) {
        console.log(error);
    }
}
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
exports.Login = async (req,res)=>{

    const {user_id, user_pw} = req.body;

    try {
        const data = await userSelect(user_id);
        if(!data?.user_id){
            return res.send("아이디 없음");
        }

        if(data.user_pw !== user_pw){
            return res.send("비밀번호 오류");
        }
        
        // 여기까지 통과하면 로그인 성공
        const accessToken = jwt.sign({
            user_id : data.user_id,
            mail : "user1@naver.com",
            nick : "user1"
        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn : "5s",
        });

        const refreshToken = jwt.sign({
            user_id : data.user_id
        },process.env.REFRESH_TOKEN_KEY,{


            expiresIn:"20s"
        });
        

        await userRefresh(user_id,refreshToken);
        req.session.access_token = accessToken;
        req.session.refresh_token = refreshToken;
        console.log(req.session);
        res.send({access: accessToken, refresh : refreshToken});

    } catch (error) {
        console.log(error);
    }
}

// 유저 토큰 검증
exports.verifyLogin = async (req,res,next)=>{

    // next 함수를 실행시켜주면 다음 미들웨어로 이동
    // next();

    // 세션 값을 가져오고
    const{access_token, refresh_token} =req.session;
    jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,acc_decoded)=>{

        if(err)
        // 엑세스 토큰이 썩은 토큰이면
        {
            //토큰이 유효한지 검증해주는 메서드
            //첫번째 매개변수로 토큰을 전달하고 
            //두번째 매개변수로 키를 전달하고
            //세번째 매개변수로 콜백함수 전달
            //콜백함수의 매개변수로 첫번째는 err 내용 객체
            //두번째는 해석된 객체
            jwt.verify(refresh_token,process.env.REFRESH_TOKEN_KEY,async (err,ref_decoded)=>{
                if(err){
                    console.log("refresh token 만료");
                    res.send("다시 로그인하세요~");
                }
                else{
                    const data = await userSelect(ref_decoded.user_id);

                    if(data.refresh == refresh_token){

                        const accessToken = jwt.sign({
                            user_id : ref_decoded.user_id
                        },process.env.ACCESS_TOKEN_KEY,{
                            expiresIn : "5s"
                        })
                        req.session.access_token = accessToken;
                        console.log("access_token 재발급");
                        next();
                    }
                    else{
                    res.send("중복 로그인 방지");
                    }

                }
            })
        }
        else{
            console.log("로그인 정상 유지중");
            next();
        }
    })
}
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
