const Sequelize = require("sequelize");
const { User } = require("../models");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  
  try {
    const {
      user_id,
      user_pw,
    } = req.body.data;
    // console.log(req.body.data);

    const data = await User.findOne({ where: { user_id } });
    if (data != null) {
      return res.send("이미 존재하는 계정");
    }

    const hash = bcrypt.hashSync(user_pw, 10);

        await User.create({

            user_id : user_id,
            user_pw : hash,
            
        }).then((e)=>{
            return res.send("가입성공");
        })
        
   } catch (error) {
        console.log("사인 컨트롤러에서 오류남" +error);
   }
}