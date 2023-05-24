const {User} = require("../models");
const bcrypt = require("bcrypt");
const { findOne } = require("../models/users");


exports.signUp = async (req,res)=>{
    
    const {user_id,user_pw,user_nick,user_tel} = req.body;

    try {
        const user = await User.findOne({where : {user_id}});

        if(user != null){
           return res.send("중복된 아이디입니다.");
        }
        const hash = bcrypt.hashSync(user_pw,10);

        User.create({
            
            user_id,
            user_pw : hash,
            user_nick,
            user_tel,
        })
        
        res.redirect("/login");
    } catch (error) {   
        console.log("signup 컨트롤러 오류"+error);
    }
    
}