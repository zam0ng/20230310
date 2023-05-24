const {User} = require("../models");
const bcrypt = require("bcrypt");

exports.signUp = async (req,res)=>{

    try {
        const { name, age, user_id, user_pw} =req.body;
        const user = await User.findOne({where : {user_id}});
        // 중복 체크를 위해 유저를 조회
        if(user != null){
            return res.send("중복된 아이디")
        }

        // 아니면 회원가입
        // hashSync : 동기적으로 실행할 수 있는 메서드
        const hash = bcrypt.hashSync(user_pw,10);

        // user 테이블에 회원 추가
        User.create({
            name,
            age,
            user_id,
            user_pw : hash,
        })
        res.redirect("/login");
    } catch (error) {

        console.log(error);

    }
}