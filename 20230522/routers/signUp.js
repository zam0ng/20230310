const router = require("express").Router();

const {signUp} = require("../controller/signUpcontroller");

router.get("/",(req,res)=>{

    res.render("signUp");
})

router.post("/",signUp);

module.exports = router;