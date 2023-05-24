// const {User} = require("../models");
// const config = require("../config");

const bcrypt = require("bcrypt");

exports.adminsignup = async(User) =>{
        const user_pw = "admin";
    try {
        const hash = bcrypt.hashSync(user_pw,10);
        // console.log("여기들어오니" + User);
        
        await User.create({
            user_id: "admin",
            user_pw: hash,
            user_nick : "admin",
            user_tel : "112",
            agree : true,
            grade : "100",
        })

    } catch (error) {
        console.log("어드민 계정생성 컨트롤러 오류" + error);
    }
}

