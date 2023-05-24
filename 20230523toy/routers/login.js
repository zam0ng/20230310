const {login} = require("../controller/logincontroller");

const router = require("express").Router();


router.get("/",(req,res)=>{
    
    res.render("login");
})

router.post("/",login);

module.exports = router;