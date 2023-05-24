const router = require("express").Router();
const {borderview,borderinsert}= require("../controller/bordercontroller");
const {islogin} =require("../controller/logincontroller");

router.get("/",islogin,borderview);

router.post("/",islogin,borderinsert);

module.exports = router;