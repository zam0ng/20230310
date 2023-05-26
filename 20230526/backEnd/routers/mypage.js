const router = require("express").Router();

const {mypage} =require("../controller/insertcontroller");
const {isLogin} = require("../middleware/loginmiddleware");

router.get('/',isLogin,mypage);

module.exports =router;