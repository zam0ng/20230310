const jwt = require("jsonwebtoken");

exports.isLogin = async (req,res,next) =>{
    const {access_token} = req.session;
    console.log(access_token);
    try {

        jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,acc_decoded)=>{

            if(err){
                res.send("다시 로그인");
            }
            else{
                req.acc_decoded = acc_decoded;
                next();
            }
        })
    } catch (error) {
        console.log(error);
    }
}