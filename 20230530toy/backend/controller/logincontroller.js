const Sequelize = require("sequelize");

const {User} =require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async(req,res) =>{

    try {
        const {user_id, user_pw} = req.body;

        const user = await User.findOne({where : {user_id}});
        
        if(user==null){
            return res.send("가입되지 않는 계정");
        }
        console.log(user_pw);
        console.log(user.user_pw);
        const same = bcrypt.compareSync(user_pw,user.user_pw);
        console.log(same);
        if(same){

            const token = jwt.sign({
                name : user.name,
                user_id : user.user_id,
            },process.env.ACCESS_TOKEN_KEY,{
                expiresIn : "5m"
            })

            req.session.access_token = token;
            
            console.log(req.session.access_token);

            res.redirect("http://127.0.0.1:5500/frontend/main.html");
        }
        else{
            res.send("비밀번호 틀림");
        }
        
    } catch (error) {
        console.log("로그인 컨트롤러에서 오류남" + error)
    }
}
