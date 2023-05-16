const express = require("express");

const router = express.Router();

const {ViewPost, POSTVIEW} = require("../controller/posts");
const { InsertPost } = require("../controller/posts");


router.get("/",async(req,res)=>{

    try {
        const data = await ViewPost(req,res);       
        res.render("main",{data});
        console.log(data);
    } catch (error) {
        console.log("게시글 리스트 그리다 에러남");
    }
})

router.get("/insert",async(req,res)=>{

    try {
        res.render("insert");
    } catch (error) {
        
    }
})

router.post("/insert",async(req,res)=>{

    // const {title, content} = req.body;

    try {
        InsertPost(req);
        res.redirect("/posts");
    } catch (error) {
        console.log(" 글 추가하다가 라우터에서 오류남")
    }
})

router.get("/detail/:id",async(req,res)=>{

    try {
        const [[data]] = await POSTVIEW(req,res);
        console.log("bb");
        console.log(data);
        res.render("detail",{data});
    } catch (error) {
        
    }
})

module.exports = router;