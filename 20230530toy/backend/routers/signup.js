const router = require("express").Router();
const {signup} = require("../controller/signupcontroller");

router.post("/",signup);

module.exports = router;