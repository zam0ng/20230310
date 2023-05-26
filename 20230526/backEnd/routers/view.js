const router = require("express").Router();
const {isLogin} = require("../middleware/loginmiddleware");
const {viewposts} = require("../controller/insertcontroller");

router.get("/view",isLogin,viewposts);


module.exports = router;