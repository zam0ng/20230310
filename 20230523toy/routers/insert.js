const router = require("express").Router();
const  {borderinsertview,borderinsert} =require("../controller/bordercontroller");
const {islogin} = require("../controller/logincontroller");

router.get("/",islogin,borderinsertview);

router.post("/",islogin,borderinsert);

module.exports = router;