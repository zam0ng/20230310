const router = require("express").Router();
const {signUp} = require("../controller/signupcontroller");

router.get("/",(req,res)=>{
    res.render("signUp");
})

router.post("/",signUp);

module.exports=router;