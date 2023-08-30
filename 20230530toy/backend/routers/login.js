const router = require("express").Router();
const {login} =require("../controller/logincontroller");

router.post("/",login);

module.exports =router;