const Sequelize = require("sequelize");
const {User} = require("../models");
const bcrypt = require("bcrypt");

exports.signup = async(req,res) =>{
    
    try {
        const {name, user_id, user_pw} = req.body;

        const user = await User.findOne({where : {user_id}})

        if(user!=null){

            return res.send("사용중인 아이디")
        }
        const hash =  bcrypt.hashSync(user_pw,10);




        await User.create({
            name : name,
            user_id : user_id,
            user_pw : hash,
            img : "",
        })
        
        res.redirect("http://127.0.0.1:5500/frontend/login.html");
        

    
    } catch (error) {
        console.log("signup 컨트롤러 오류"+error);
    }
}