const {User} = require("../models");

// 로그인 bcrypt jsonwebtoken
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");

exports.Login = async (req,res) =>{
    try {

        const {user_id,user_pw} = req.body;
        const user = await User.findOne({where : {user_id}});

        if(user==null){
            res.send("가입한 유저가 아님");
        }

        const same = bcrypt.compareSync(user_pw,user.user_pw);

        const {name,age} =user;

        if(same){
            let token = jwt.sign({
                name,
                age,
                user_id,
            },process.env.ACCESS_TOKEN_KEY,
            {
                expiresIn : "20m"
            })
            req.session.access_token = token;
            // / : 여기서 경로는 백엔드의 도메인 경로 루트
            // 때문에 프론트의 경로를 작성해주자.
            // 이렇게 리다이렉트를 할게 아니면 프론트에서 응답 받은 값으로
            // 조건 분기 처리해서 페이지를 전환 시켜주면된다.
            // return res.send("로그인 완료");

            // 이런 경우는 배포된 프론트의 경로
            return res.redirect("http://127.0.0.1:5500/frontEnd/main.html")
        }else{
            return res.send("비밀번호 틀림")
        }
    } catch (error) {
        console.log(error);
    }
    
}

exports.viewUser = async (req,res)=>{
    const {acc_decoded} = req;
    // console.log(acc_decoded);
    const user= await User.findOne({where : {name : acc_decoded.name}})

    //json 형태로 데이터를 응답
    res.json(user);
}