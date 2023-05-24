const router = require("express").Router();
const {userview} =require("../controller/userviewcontroller")
const {agreeupdate} = require("../controller/agreeupdate");

router.get("/",userview);

router.post("/",agreeupdate);

router.get("/update/:id",userview);

router.post("/update/:id",agreeupdate);

module.exports = router;
