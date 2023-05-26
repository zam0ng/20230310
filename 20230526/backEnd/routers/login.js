const router = require("express").Router();

const {Login,viewUser} = require("../controller/logincontroller");
const {isLogin} = require("../middleware/loginmiddleware");

router.post("/", Login);
router.get("/view",isLogin,viewUser);
module.exports = router;