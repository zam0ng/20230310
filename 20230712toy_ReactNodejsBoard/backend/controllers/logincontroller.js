const Sequelize = require("sequelize");
const {User} =require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const session = require("express-session");

exports.login = async(req,res)=>{

    try {
    
    
    const {user_id,user_pw} = req.query;
    // console.log(req.query);

    const data = await User.findOne({where :{user_id}});
    
    // console.log(data);
    if(data==null){
        return res.send("가입되지 않은 계정");
    }

    const hash = bcrypt.compareSync(user_pw,data.user_pw);

    if(hash){
        let token = jwt.sign(
                {
                    id : data.id,
                    user_id : data.user_id,
                },
                process.env.ACCESS_TOKEN_KEY,
                {
                    expiresIn : "60m",
                }
        )
        req.session.access_token = token;
        res.cookie("token",token, {

            httpOnly: true,
            secure: true,
            sameSite: 'strict',
        })
        return res.json({msg:"로그인 성공",token : token});

    }


    else{
        return res.send("비밀번호 틀림");
    }
    } catch (error) {
        console.log("로그인컨트롤러에서 오류남" +error) ;  
    }


}

exports.islogin = async(req,res,next) =>{
    try {
        // console.log(req);
        const cookie= req.cookies.token;
        // console.log(cookie);
        jwt.verify(cookie,process.env.ACCESS_TOKEN_KEY,(err,acc_decoded)=>{

            if(err) {
                res.send("다시 로그인");
            }
            else{

                req.acc_decoded = acc_decoded;
                next();
            }
        })
    } catch (error) {
        console.log("이즈로그인에서 오류남 "+ error);
    }
}