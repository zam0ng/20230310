const router = require("express").Router();

const {insert} = require("../controller/insertcontroller");
const {isLogin} = require("../middleware/loginmiddleware");


router.post("/", isLogin,insert);

module.exports = router;