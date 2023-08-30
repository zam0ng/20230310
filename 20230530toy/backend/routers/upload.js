const router = require("express").Router();
const {Upload,myimg} = require("../controller/imgcontroller")
const {User} =require("../models");
const {islogin} = require("../middelware/islogin");

router.post("/",Upload.single("upload"),islogin,async(req,res)=>{

    console.log("upload 라우터 들어오니")
    const {file,body}= req;
    const {decoded} =req;
    const user_id = decoded.user_id

    console.log(user_id);
    console.log(file.filename);

    await User.update({img:file.filename},{where : {user_id}})

    console.log(file);
    console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
    console.log(body);

    res.send();
    // User.update({img:})
})
router.get("/myimg",islogin,myimg);

module.exports = router;
