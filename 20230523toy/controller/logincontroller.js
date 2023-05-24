const {User,Post} = require("../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req,res)=>{
    
    try {
        const {user_id,user_pw} =req.body;
        
        
        if(user_id=="admin"){
            res.redirect("/agree");
        }
        else{

            const user = await User.findOne({where : {user_id}});
            
            if(user==null){
                res.send("가입되지 않는 계정");
            }
    
            if(user.agree == 0){
                res.send("승인되지 않는 계정");
            }
            
            else{
    
                if(user==null){
                    res.send("가입되지 않는 계정");
                }
        
                const same = bcrypt.compareSync(user_pw,user.user_pw);
                if(same){
                    let token = jwt.sign({
                                    user_id : user.user_id,
                                    user_nick : user.user_nick,
                                    user_tel : user.user_tel,
                                },process.env.ACCESS_TOKEN_KEY,{
                                    expiresIn : "10m",
                                })
        
                    req.session.access_token = token;
                    res.redirect("/border");
                }
                else{
                    res.send("비밀번호 틀림");
                }
            }
            
        }
    } catch (error) {
        console.log(error);
    } 
}


exports.islogin = async(req,res,next)=>{
    const {access_token} = req.session;

    jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,decoded)=>{
        if(err){
            res.send("다시 로그인하세요");

        }

        else{
            req.decoded = decoded;
            next();
        }
    })
}

