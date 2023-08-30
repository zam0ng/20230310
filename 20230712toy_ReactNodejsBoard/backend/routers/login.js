const router = require("express").Router();
const {login,islogin} = require("../controllers/logincontroller")

router.get("/",login);
router.get("/islogin",islogin)

module.exports =router;