const jwt = require("jsonwebtoken");

exports.islogin = async(req,res,next)=>{
    console.log("islogin 들어오니?");
    // console.log(req);
    const {access_token} = req.session;
    
    console.log(access_token);
    try {
        jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,decoded)=>{            if(err){
                return res.send("다시 로그인")
            }
            else{
                req.decoded = decoded;
                console.log("next로 가니?>")
                next();
            }
        })
    } catch (error) {
        console.log(error);
    }
}