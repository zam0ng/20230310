const router = require("express").Router();
const {board,boardbring,bringdetail,update,del} = require("../controllers/boardcontroller");
const {islogin} =require("../controllers/logincontroller")
router.get("/",islogin,board);
router.get("/bring",islogin,boardbring)
router.get("/bringdetail",islogin,bringdetail);
router.get("/update",islogin,update)
router.get("/del",islogin,del)

module.exports = router;

