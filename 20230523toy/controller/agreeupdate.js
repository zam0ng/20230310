const {User} = require("../models");
const {userview} =require("./admin");

exports.agreeupdate = async (req,res)=>{
    const {user_id} =req.body;
    console.log(user_id)
    const agree = true;
    
    await User.update({agree},{where:{user_id}});

    console.log(user_id)
    console.log(agree);
    res.redirect("/agree");
    try {
        
    } catch (error) {
        
    }
}